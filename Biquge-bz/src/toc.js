function execute(url) {
    let response = fetch(url + "/");
    if (response.ok) {
        let doc = response.html();
        const list = [];
       var el =  doc.select("#list a");
       for (var i = 9; i < el.size(); i++) {
                var e = el.get(i)
                list.push({
            name: e.select("a").text(),
            url: e.attr("href"),
            host: "https://www.biquge.bz"
        

        });
            }
            return Response.success(list);
    }
    return null;
}