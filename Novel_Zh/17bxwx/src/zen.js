function execute(url, page) {
    if (!page) page = '1';

    let response = fetch("https://www.17bxwx.com" + url + page + ".htm");
    console.log("https://www.17bxwx.com" + url + page + ".htm")
    if (response.ok) {
        let doc = response.html();
        const data = [];
        let next = doc.select("a:contains(下一页)").first().attr("href").split(/[/ ]+/).pop().replace(".htm","")
        console.log(next)
        doc.select("#newscontent .l li").forEach(e => {
            data.push({
                name: e.select(".s2 a").first().text(),
                link: e.select(".s2 a").first().attr("href"),
                description: e.select(".s3 a").first().text(),
                host: "https://www.17bxwx.com"
            })
        });


        return Response.success(data, next)
    }
    return null;
}