function execute(url) {
    url = url.replace('m.112378.com', 'www.112378.com');
    let data  ="";
    let part1 = url.replace("https://www.112378.com", "").replace("http://www.112378.com", "").replace(".html","");
    var next = part1;
    while (next.includes(part1)) {
        console.log(next)
        let response = fetch("https://www.112378.com" + next +".html");
        if (response.ok) {
            let doc = response.html();
            next = doc.select("a[rel=\"next\"]").attr("href").replace(".html","");
console.log(next)
            doc.select("center").remove();
            let htm = doc.select("#booktxt").html();
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