function execute(url) {
    url = url.replace('m.youyoukanshu.com', 'www.youyoukanshu.com');
    let data  ="";
    let part1 = url.replace("https://www.youyoukanshu.com", "").replace("https://www.youyoukanshu.com", "").replace(".html","");
    var next = part1;
    while (next.includes(part1)) {
        console.log(next)
        let response = fetch("https://www.youyoukanshu.com" + next +".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select("a:contains(下一页)").first().attr("href").replace(".html","");
            doc.select(".posterror").remove();
            doc.select("script").remove();
            let htm = doc.select(".content").html();
            htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g, '')
                .replace(/ ?\n/g, "<br>")
                .replace(/<\/?p>/g, "")
                .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
                .replace("最新章节！", '')
                .replace("笔趣阁", '');
           
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