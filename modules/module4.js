const url = require('url');
const querystring = require('querystring');

const parsearUrl = (inputUrl) => {
    const parsed = new URL(inputUrl);

    return {
        host: `${parsed.protocol}//${parsed.host}`,
        pathname: parsed.pathname,
        parametros: Object.fromEntries(parsed.searchParams)
    };
};

module.exports = parsearUrl;


