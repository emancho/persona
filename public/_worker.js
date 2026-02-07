// All credit for this _worker.js file goes to the following two Gists:
// https://gist.github.com/dhruborus/e39265f3a564177893c11c210134468f
// https://gist.github.com/dom-k/b4732a1a20ed20b2d6a572a11883c746

// A hosting service for single-page applications.
// It is composed of a single Worker that serves static assets and handles routing.
// It is best-suited for use cases that require programmatic access to static assets,
// such as when you need to serve different files to different users.
// If you do not have this requirement, we recommend that you use Cloudflare Pages instead.

// `ASSETS` is the binding to the Cloudflare Pages asset server.
//
// In this example, we have a static single-page application that we want to serve.
// We will serve the content of the `index.html` file for all routes that are not found,
// except for a few routes that we want to reserve for other purposes.
// For example, we want to serve the `404.html` file for all routes that are not found
// and that are not reserved for other purposes.
//
// The following is a list of routes that we want to reserve for other purposes:
const ASSET_MANIFEST = require("__STATIC_CONTENT_MANIFEST");

const reservedPaths = [
    "/api/*",
    "/admin/*",
    "/docs/*",
];

// The following is a list of static assets that we want to serve.
// We will serve the content of the `index.html` file for all routes that are not found,
// except for a few routes that we want to reserve for other purposes.
const staticAssets = [
    "/favicon.ico",
    "/logo192.png",
    "/logo512.png",
    "/manifest.json",
    "/robots.txt",
];

// The following is a list of routes that we want to serve the content of the `index.html` file for.
const spaRoutes = [
    "/",
    "/projects",
    "/contact",
    "/radioPage",
    "/aboutMe"
];

async function handleRequest(request, env) {
    const url = new URL(request.url);

    // Check if the request is for a reserved path.
    for (const path of reservedPaths) {
        if (url.pathname.startsWith(path.replace("*", ""))) {
            return new Response("Not Found", { status: 404 });
        }
    }

    // Check if the request is for a static asset.
    if (staticAssets.includes(url.pathname)) {
        return env.ASSETS.fetch(request);
    }

    // Check if the request is for an SPA route.
    if (spaRoutes.includes(url.pathname)) {
        const asset = await env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
        return new Response(asset.body, {
            headers: {
                "Content-Type": "text/html",
            },
        });
    }

    // Check if the request is in the asset manifest.
    if (Object.values(ASSET_MANIFEST).includes(url.pathname.substring(1))) {
        return env.ASSETS.fetch(request);
    }

    // For all other requests, serve the 404 page.
    const asset = await env.ASSETS.fetch(new Request(new URL("/404.html", request.url), request));
    return new Response(asset.body, {
        status: 404,
        headers: {
            "Content-Type": "text/html",
        },
    });
}

export default {
    async fetch(request, env) {
        return await handleRequest(request, env);
    },
};
