function execute(url) {
    url = url.replace('m.31dv.com', 'www.31dv.com');
    let data = "";
    let part1 = url.replace("https://www.31dv.com", "").replace(".html", "");;
    var next = part1;
    while (next.includes(part1)) {
        let response = fetch("https://www.31dv.com" + next);
        if (response.ok) {
            let doc = response.html();
            next = doc.select("a#next_url").first().attr("href").replace('.html', '');
            console.log(next)
            doc.select("#play").remove();
            doc.select(".report").remove();
            doc.select('p[style*=\"color:red;\"]').remove();
            let htm = doc.select("#booktxt").html();
            data = data + htm;
        } else {
            break;
        }
    }
    if (data) {
        data = data.replace(/<p> 正文完。 <\/p>/g, '')
            .replace(/&(nbsp|amp|quot|lt|gt|bp|emsp);/g, "")
            .replace('支持.\\^完*本*神*站*\\^.把本站分享那些需要的小伙伴！找不到书请留言！', '');
        return Response.success(data);
    }
    return null;
}