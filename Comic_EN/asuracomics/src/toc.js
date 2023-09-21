function execute(url) {
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();

        let chapList = [];
        let el = doc.select("#chapterlist li a");
        doc.select(".chapterdate").remove();
        for (let i = el.length - 1; i >= 0; i--) {
            let e = el.get(i);
            chapList.push({
                name: e.text(),
                url: e.attr("href"),
                host: "https://asuracomics.com"
            });
        }
        return Response.success(chapList);
    }

    return null;
}