function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        let htm = doc.select("#txt").html();
        doc.select(".posterror").remove();
        doc.select('script').remove();
        doc.select("center").remove();

        htm = cleanHtml(htm);
        return Response.success(htm);
    }
    return null;
}

function cleanHtml(html) {
    html = html.replace(/\n/g, '<br>');
    // remove duplicate br tags
    html = html.replace(/(<br>\s*){2,}/gm, '<br>');
    // strip html comments
    html = html.replace(/<!--[^>]*-->/gm, '');
    // html decode
    html = html.replace(/&nbsp;/g, '');
    // trim br tags
    html = html.replace(/(^(\s*<br>\s*)+|(<br>\s*)+$)/gm, '');

    return html.trim();
}