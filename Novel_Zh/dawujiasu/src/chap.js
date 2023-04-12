function execute(url) {
    url = url.replace('m.dawujiasu.com', 'www.dawujiasu.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        let htm = doc.select("#book_text").html();
        htm = cleanHtml(htm);
        return Response.success(htm);
    }
    return null;
}
//clear rác
function cleanHtml(htm) {
    htm = htm.replace(/(<br>\s*){2,}/g, '<br>');
    htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g, '');
    htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    htm = htm.replace(/<!--(<br \/>)?[^>]*-->/gm, '');
    htm = htm.replace(/\&nbsp;/g, "");
    return htm;
}