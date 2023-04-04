function execute(url) {
    let response = fetch(url);
    console.log(url)
    if (response.ok) {
        let doc = response.html();
       console.log(url)
        let el = doc.select("#list > dl > dd > a")
        const data = [];
        for (let i = 12; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url:  "https://www.17bxwx.com" + e.attr("href"),
                host: "https://www.17bxwx.com"
            })
        }
        return Response.success(data);
    }
    return null;
}