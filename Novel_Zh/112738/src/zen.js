function execute(url, page) {
if(!page) page = '1';
	url = url.replace('m.112378.com', 'www.112378.com');
    let response = fetch(url + page + "/");
    if (response.ok) {
        let doc = response.html();
        const data = [];
       // let next = doc.select("a:contains(>>)").first().attr("href").slice(0, -1).split(/[/ ]+/).pop()
        console.log(next)
		doc.select("#newscontent .l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text().replace("《","").replace("》",""),
                link: "http://www.112378.com" + e.select(".s2 a").attr("href"),
                description: e.select(".s3 a").text(),
                host: "http://www.112378.com"
            })
        });
        var next = (parseInt(page)+1).toString();
        return Response.success(data,next)
    }
    return null;
}