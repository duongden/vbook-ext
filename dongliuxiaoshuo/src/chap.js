function execute(url) {
    url = url.replace('m.dongliuxiaoshuo.com', 'www.dongliuxiaoshuo.com');
    
    let cvData  ="";
    let part1 = url.replace("https://www.dongliuxiaoshuo.com", "").replace(".html","");
    var next = part1;

    while (next.includes(part1)) {
        let response = fetch("https://www.dongliuxiaoshuo.com" + next +".html");
        if (response.ok) {

            let doc = response.html();
            next = doc.select(".pull-right").first().select("a").last().attr("href").replace(".html","");

            let htm = doc.select(".content").html();
            cvData = cvData + htm;
        } else {
            break;
        }
    }
    if (cvData) {
        return Response.success(cvData);
    }
    return null;



}