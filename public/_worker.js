/**
 * This is a simplified and robust Cloudflare Worker for a Single-Page Application (SPA).
 * It follows the recommended pattern:
 * 1. Try to fetch the requested asset directly from the Pages asset server.
 * 2. If the asset is not found (e.g., /projects), it's a client-side route.
 * 3. In that case, fetch and serve the main entrypoint of the application (index.html).
 * This avoids maintaining brittle lists of routes or assets.
*/
export default {
  async fetch(request, env) {
    // First, try to fetch the request as a static asset from the Pages asset server.
    try {
      // env.ASSETS.fetch() will throw an error if the asset is not found.
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // If the asset is not found, we fall through to the SPA routing logic below.
    }

    // If the asset was not found, it's likely a SPA route.
    // Fetch and serve the index.html, which is the entrypoint for the SPA.
    try {
      const indexRequest = new Request(new URL("/index.html", request.url), request);
      const indexResponse = await env.ASSETS.fetch(indexRequest);
      
      // Return index.html with a 200 status code to allow the client-side router to handle the path.
      return new Response(indexResponse.body, {
        ...indexResponse,
        status: 200,
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
        },
      });
    } catch (e) {
      // If index.html itself cannot be found, then the project is misconfigured.
      return new Response('Application error: index.html not found', { status: 404 });
    }
  }
};
