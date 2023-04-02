function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');

        let htm = doc.select("#content").html();
        doc.select(".posterror").remove();
        doc.select('script').remove();
        doc.select("center").remove();

        htm = cleanHtml(htm).replace(/<a[^>]*>([^<]+)<\/a>/g, '')
            .replace(/<\/?p>/g, "")
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
            .replace("请记住本书首发域名：ddyueshu.com。顶点小说手机版阅读网址：m.ddyueshu.com", "");
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