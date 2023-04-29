
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        doc.select("#tab-b0").remove();
//#tab-b1 > div.chapters
        let list = [];
        doc.select("#tab-b1 div.chapters ul li a").forEach(e => list.push({
                name: e.select("a span").text(),
                url: e.attr("href").trim(),
                host: "https://novely.info/"
        }));
        return Response.success(list);

    }
    return null;
}