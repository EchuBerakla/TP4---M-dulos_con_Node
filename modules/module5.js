const parsearUrl = (inputUrl) => {
    try {
        const parsed = new URL(inputUrl);

        return {
            host: `${parsed.protocol}//${parsed.host}`,
            pathname: parsed.pathname,
            parametros: Object.fromEntries(parsed.searchParams)
        };
    } catch (error) {
        console.error("Se produjo un error al parsear la URL:", error.message);
        return null;
    }
};

module.exports = parsearUrl;
