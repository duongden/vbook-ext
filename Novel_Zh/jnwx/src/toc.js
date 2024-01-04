function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
       console.log(url)
        let el = doc.select("#list dd a")
        const data = [];
        for (let i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: e.attr("href"),
                host: "https://www.jnwx.org"
            })
        }
        return Response.success(data);
    }
    return null;
}