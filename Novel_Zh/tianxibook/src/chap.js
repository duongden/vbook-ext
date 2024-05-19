load('config.js');

function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let data  ="";
    let part1 = url.replace(BASE_URL, "").replace(".html","");
    var next = part1;
    while (next.includes(part1)) {
        console.log(next)
        let response = fetch(BASE_URL+ next +".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select("a[rel=\"next\"]").attr("href").replace(".html","");
console.log(next)
            doc.select("center").remove();
            let htm = doc.select("#booktxt").html();
            data = data + cleanHtml(htm);
        } else {
            break;
        }
    }
    if (data) {
        return Response.success(data);
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
    htm = htm.replace("ap;ap;ldquo;ap;ap;hellip;ap;ap;hellip;ap;ap;rdquo;","")
    return htm;
}