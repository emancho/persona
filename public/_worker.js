/**
 * A self-contained Cloudflare Worker for a Single-Page Application (SPA).
 *
 * This worker embeds the content of index.html directly to bypass any issues
 * with the env.ASSETS.fetch() binding for the main entrypoint.
 *
 * Logic:
 * 1. Store the known content of index.html in a constant.
 * 2. Check if the request is for a static asset (has a file extension).
 * 3. If it is an asset, serve it using env.ASSETS.fetch().
 * 4. If it is not an asset (a client-side route), serve the hardcoded HTML.
*/

// The full content of your build/index.html file.
const INDEX_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><link rel="icon" href="/favicon.ico"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><link rel="apple-touch-icon" href="/logo192.png"/><link rel="manifest" href="/manifest.json"/><title>Ed_d w/o the War - The Artist</title><script defer="defer" src="/static/js/main.8456edad.js"></script><link href="/static/css/main.57b293a0.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div></body></html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Check if the path has a file extension.
    // This simple check is effective for distinguishing assets from SPA routes.
    const hasFileExtension = path.lastIndexOf('.') > path.lastIndexOf('/');

    // If it's an asset, fetch it from the asset server.
    if (hasFileExtension) {
      return env.ASSETS.fetch(request);
    }

    // Otherwise, it's an SPA route. Serve the embedded index.html.
    return new Response(INDEX_HTML, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
      status: 200
    });
  }
};
