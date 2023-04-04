
function execute(url) {
    url = url.replace('m.17bxwx.com', 'www.17bxwx.com');
    let data  ="";
    let part1 = url.replace("https://www.17bxwx.com", "").replace("https://www.17bxwx.com", "").replace(".html","");
    var next = part1;
    while (next.includes(part1)) {
        console.log(next)
        let response = fetch("https://www.17bxwx.com" + next +".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select("a:contains(下一页)").first().attr("href").replace(".html","");
            doc.select("#content p").last().remove();
            let htm = doc.select("#content").html().replace("本小章还未完，请点击下一页继续阅读后面精彩内容！","");
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