function execute(url, page) {
    if(url.slice(-1) === "/")
        url = url.slice(0, -1)
	url = url.replace('m.17bxwx.com', 'www.17bxwx.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        const data = [];
        let ele1 = doc.select("#newscontent .l li")
        ele1.forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.17bxwx.com"
            })
        }); 
        return Response.success(data)
    }
    return null;
}