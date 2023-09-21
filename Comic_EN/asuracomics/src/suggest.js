function execute(input) {
    let doc = Html.parse(input);
    let books = [];
   
    doc.select("div.serieslist.pop.wpop.wpop-weekly > ul > li").forEach(e => {
        books.push({
            name: e.select("h2 a").text(),
            link: e.select("h2 a").attr("href"),
            cover: e.select("div.imgseries > a > img").first().attr("src"),
            description: "Score: " + e.select(".numscore").text(),
            host: "https://asuracomics.com",
        })
//#wpop-items > div.serieslist.pop.wpop.wpop-weekly > ul > li:nth-child(1) > div.imgseries > a > img
    });

    return Response.success(books);

}