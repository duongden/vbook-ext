function execute(url) {
    url = url.replace(".html", "")
    let book_id = url.split(/[/ ]+/).pop();


    console.log(url)
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let el = doc.select("#newlist").last().select("dd a")
        const data = [];
        for (let i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: "https://www.zbcxw.cn" + "/xiaoshuo/" + book_id + '/' + e.attr("href"),
                host: "https://www.zbcxw.cn"
            })
        }
        return Response.success(data);
    }
    return null;
}