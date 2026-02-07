/**
 * A resilient Cloudflare Worker for a Single-Page Application (SPA).
 * This version explicitly checks the status code of the asset fetch.
 *
 * Logic:
 * 1. Fetch the requested asset from the Pages asset server.
 * 2. Check the response status code. If it's 404, it's a client-side route.
 * 3. If it's a 404, discard the response and fetch index.html instead.
 * 4. Otherwise, return the original response.
*/
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Skip this check for actual files to avoid unnecessary processing.
    const hasFileExtension = path.lastIndexOf('.') > path.lastIndexOf('/');
    if (hasFileExtension) {
      return env.ASSETS.fetch(request);
    }
    
    // Fetch from the asset server.
    const assetResponse = await env.ASSETS.fetch(request);

    // If the asset server returns a 404, it's a client-side route.
    if (assetResponse.status === 404) {
      const indexResponse = await env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
      return new Response(indexResponse.body, {
        ...indexResponse,
        status: 200,
        headers: { 'Content-Type': 'text/html;charset=UTF-8' },
      });
    }

    // If the asset was found, return it directly.
    return assetResponse;
  }
};
