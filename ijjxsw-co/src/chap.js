function execute(url) {
    url = url.replace('m.ijjxsw.co', 'www.ijjxsw.co');
    let cvData ="";
    let part1 = url.replace("http://www.ijjxsw.co", "").replace("https://www.ijjxsw.co", "").replace(".html","");
    var next = part1;
    while (next.includes(part1)) {
        let response = fetch("http://www.ijjxsw.co" + next +".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select("a#next_url").attr("href").replace(".html","");
            let htm = doc.select("#view_content_txt").html();
            htm = htm.replace(/\&nbsp;/g, "");
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