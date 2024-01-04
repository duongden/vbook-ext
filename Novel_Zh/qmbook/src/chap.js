load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let cvData ="";
    let part1 = url.replace(BASE_URL, "").replace(BASE_URL, "").replace(".html","");
    var next = part1;
    while (next.includes(part1)) {
        let response = fetch(BASE_URL + next +".html");
        if (response.ok) {
            let doc = response.html();
            doc.select(".readinline").remove();
            next = doc.select("a:contains(下一)").attr("href").replace(".html","");
            let htm = doc.select("#chaptercontent").html();
            htm = htm.replace(/\&nbsp;/g, "");
            cvData = cvData + cleanHtml(htm);
        } else {
            break;
        }
    }
    if (cvData) {
        return Response.success(cvData);
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
    htm = htm.replace(/请收藏本站：https:\/\/www\.qmbook\.cc。全民小说网手机版：https:\/\/m\.qmbook\.cc/g, '');
    return htm;
}