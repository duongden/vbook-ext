
function execute(data) {

    let doc = Html.parse(data);
    let books = [];

    doc.select("a").forEach(e => {
        if (e.text().trim() !== '') { // Check if the <a> has non-empty text
            books.push({
                name: e.text(),
                link: "https://www.bqgbi.com" + e.attr("href"),
                cover: e.attr("src"),
                description: e.select(".author").text(),
                host: "https://www.bqgbi.com"
            });
        }
    });

    return Response.success(books);
}