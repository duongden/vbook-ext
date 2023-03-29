
function execute(url) {
    url = url.replace('m.biquge.la', 'www.biquge.la');
    let data = "";
    let part1 = url.replace("http://www.biquge.la", "").replace(".html", "");
    var next = part1;
    while (next.includes(part1)) {
        console.log(next);
        console.log("blacktea");
        let response = fetch("http://www.biquge.la" + next + ".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select(".g-content-nav a").last().attr("href").replace(".html", "");
            console.log(next)
            let htm = doc.select("#content").html();
            data = data + htm;
        } else {
            break;
        }
    }
    if (data) {
        return Response.success(data);
    }
    return null;
}