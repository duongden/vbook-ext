function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc.select("#content_tip").remove();

        let htm = doc.select("#content").html();

        htm = cleanHtml(htm).replace(/<a[^>]*>([^<]+)<\/a>/g, '')
            .replace(/<\/?p>/g, "")
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
            .replace("请记住本书首发域名：www.xlaidudu.net。来读读小说手机版阅读网址：m.xlaidudu.net", "");
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