
/**
 * Handler the main data to pages
 * @param {any} context The page context
 * @param {serverSideTranslations} serverSideTranslations The server side translation instance
 * @param {Array} result The page result from get the page data
 * @param {string} resultAlias The name of returned alias from query
 */
export async function pageHandler (context, serverSideTranslations) {
    const preview = context.preview !== undefined ? context.preview : false;
    const sst = await serverSideTranslations(context.locale, ['common', 'slugs']);

    return {
        sst: sst,
        preview: preview
    }
}