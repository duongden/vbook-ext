function execute(url) {
    url = url.replace('m.jnwx.org', 'www.jnwx.org');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc.select('p').last().remove();
        let htm = doc.select("#content").html();
        htm = cleanHtml(htm)
        return Response.success(htm);
    }
    return null;
}
function cleanHtml(html) {
    html = html.replace(/\&nbsp;/g, "");
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