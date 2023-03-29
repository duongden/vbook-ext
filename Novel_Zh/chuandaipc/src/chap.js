function execute(url) {
    // url = url.replace('m.chuandaipc.com', 'www.chuandaipc.com');
    let data = "";
    let part1 = url.replace("https://www.chuandaipc.com/", "");
    var next = part1;
    while (next.includes(part1)) {
        console.log(next)
        let response = fetch("https://www.chuandaipc.com/" + next);
        if (response.ok) {
            let doc = response.html();
            next = doc.select("a:contains(下一页)").first().attr("href");
                    doc.select(".am-text-sm").remove();
            let htm = doc.select(".reader-main #content").html();
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