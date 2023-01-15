const destinationURL = 'https://s3.amazonaws.com/leto.gg/index.html';
const statusCode = 301;

async function handleRequest(request) {
    return Response.redirect(destinationURL, statusCode);
}

addEventListener('fetch', async event => {
    event.respondWith(handleRequest(event.request));
});