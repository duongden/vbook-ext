function execute(url) {
    url = url.replace('m.duanqingsi.com', 'www.duanqingsi.com');
    let data  ="";
    let part1 = url.replace("https://www.duanqingsi.com/", "").replace('.html','');
    var next = part1;

    while (next.includes(part1)) {

        let response = fetch("https://www.duanqingsi.com/" + next +".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select("#next_url").first().attr("href").replace('.html','');
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