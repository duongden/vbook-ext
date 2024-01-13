load('config.js');
function execute(input) {
    let doc = Html.parse(input);
    let books = [];
    doc.select("div.update_item").forEach(e => {
        books.push({
            name: e.select("h3 a").text(),
            link: e.select("h3 a").attr("href"),
            cover: e.select("img").first().attr("src"),
            description: e.select("span").text(),
            host: BASE_URL,
        })

    });

    return Response.success(books);

}