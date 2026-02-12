export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let requestPath = url.pathname;

    // Define your explicit route mappings for SPA routes
    // All these routes should serve the main index.html file for the client-side router
    const routeMappings = {
      '/': 'index.html',
      '/aboutMe': 'index.html',
      '/contact': 'index.html',
      '/projects': 'index.html',
      '/radioPage': 'index.html',
      // The wildcard route "*" in app.js is effectively handled by the SPA fallback logic
    };

    let r2Key;

    // Check if the requestPath has an explicit mapping
    if (routeMappings[requestPath]) {
      r2Key = routeMappings[requestPath];
    } else {
      // Fallback to the original logic for other paths
      r2Key = requestPath.slice(1); // Remove leading slash
    }

    // If you accidentally uploaded the 'build' folder itself, set this to 'build/'
    // Otherwise, leave it as ''
    const prefix = ''; 

    // 1. Handle root or directory requests
    if (r2Key === "" || r2Key.endsWith("/")) {
      r2Key += "index.html";
    }

    try {
      // Try to get the object from R2
      let object = await env.MY_BUCKET.get(prefix + r2Key);

      // 2. SPA Fallback Logic
      // If not found, and the request is likely a navigation (doesn't have a file extension)
      if (object === null && !r2Key.includes('.')) {
        console.log(`SPA Fallback: ${r2Key} not found, trying index.html`);
        object = await env.MY_BUCKET.get(prefix + "index.html");
      }

      // 3. Final 404 check
      if (object === null) {
        return new Response(`404 Not Found: The file "${r2Key}" (or index.html fallback) was not found in your R2 bucket.`, { 
          status: 404,
          headers: { "Content-Type": "text/plain" }
        });
      }

      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('ETag', object.etag);

      // 5. CORS Headers
      const origin = request.headers.get('Origin');
      const allowedOrigins = ['https://eddwithoutthewar.com', 'http://localhost:3000'];
      if (allowedOrigins.includes(origin)) {
        headers.set('Access-Control-Allow-Origin', origin);
        headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
        headers.set('Access-Control-Allow-Headers', '*');
      }

      // 4. Cache Control
      const isStaticAsset = r2Key.includes('/static/') || (r2Key.includes('.') && !r2Key.endsWith('.html'));
      headers.set('Cache-Control', isStaticAsset 
        ? 'public, max-age=31536000, immutable' 
        : 'public, max-age=3600'
      );

      return new Response(object.body, { headers });
    } catch (e) {
      return new Response('Error fetching object: ' + e.message, { status: 500 });
    }
  },
};
