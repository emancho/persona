export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const key = url.pathname.slice(1);

    if (!key) {
      return new Response('Usage: /<key>', { status: 400 });
    }

    try {
      const object = await env.MY_BUCKET.get(key);

      if (object === null) {
        return new Response('Object Not Found', { status: 404 });
      }

      const headers = new Headers();
      object.writeHttpMetadata(headers);
      headers.set('ETag', object.etag);

      // Add Cache-Control headers
      // Cache for 1 day in browser and CDN
      headers.set('Cache-Control', 'public, max-age=86400, immutable');
      // You could also set a different s-maxage for Cloudflare's edge if needed:
      // headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400, immutable');

      return new Response(object.body, {
        headers,
      });
    } catch (e) {
      return new Response('Error fetching object: ' + e.message, { status: 500 });
    }
  },
};
