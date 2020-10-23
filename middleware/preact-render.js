const renderJSX = require('preact-render-to-string');
module.exports = () => {
    return async (ctx, next) => {
        const HTMLShell = (html, state = {}) => `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css">
            <title> SSR Preact App </title>
        </head>
        <body>
            <div id="app">${html}</div>
            <script> window.__STATE__ = ${JSON.stringify(state).replace(/<|>/g, '')}</script>
            <script src="./app.js"></script>
        </body>
    </html>`
    
        ctx.render = (jsx,state) => {
            const jsxHTML = renderJSX(jsx)
            return HTMLShell(jsxHTML,state);
        }
        return next();
    }
}