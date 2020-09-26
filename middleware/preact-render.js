const render = require('preact-render-to-string');

module.exports = () => {
    return async (ctx, next) => {
        ctx.render = (root,options) => {
            return render(new root(...options))
        }
        return next();
    }
}