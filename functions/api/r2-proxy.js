export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let key = url.pathname.slice(1);

    // 1. Handle root path or directories (serve index.html)
    if (key === "" || key.endsWith("/")) {
      key += "index.html";
    }

    try {
      let object = await env.MY_BUCKET.get(key);

      // 2. SPA Fallback Logic:
      // If the specific file isn't found, and it doesn't look like a direct asset request (no dot),
      // serve index.html to let React Router handle the URL.
      if (object === null && !key.includes('.')) {
        object = await env.MY_BUCKET.get("index.html");
      }

      if (object === null) {
        return new Response('404 Not Found', { status: 404 });
      }

      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('ETag', object.etag);

      // 3. Optimized Caching
      // Static assets (JS, CSS, Images, MP3s) usually have hashes or are static: cache for 1 year.
      // HTML files and others: cache for 1 hour to allow for updates.
      const isStaticAsset = key.includes('/static/') || (key.includes('.') && !key.endsWith('.html'));
      
      if (isStaticAsset) {
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      } else {
        headers.set('Cache-Control', 'public, max-age=3600');
      }

      return new Response(object.body, {
        headers,
      });
    } catch (e) {
      return new Response('Error fetching object: ' + e.message, { status: 500 });
    }
  },
};
