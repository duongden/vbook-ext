
function execute(url) {
    url = url.replace('m.9biquge.com', 'www.9biquge.com');
    let data = "";
    let part1 = url.replace("https://www.9biquge.com", "").replace("https://www.9biquge.com", "").replace(".html", "");
    var next = part1;
    while (next.includes(part1)) {
        console.log(next)
        let response = fetch("https://www.9biquge.com" + next + ".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select("a:contains(下一页)").first().attr("href").replace(".html", "");
            doc.select(".posterror").remove();
            doc.select("script").remove();
            let htm = doc.select("#content").html();
            htm = htm.replace("最新章节",'');
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