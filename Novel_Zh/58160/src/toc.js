function execute(url) {
let book_id = url.match(/\/book\/(\d+)\/?$/)[1]
    console.log(book_id)
    let folder_id = Math.floor(book_id / 1000);
    let url1  = "https://m.58160.net/" + folder_id.toString() + "/" +book_id + "/"
    console.log(url1)
    let response = fetch(url1);

    if (response.ok) {
        let doc = response.html();
        let el1 = doc.select("#chapterlist").last()
        doc.select('p a[style*=\"color:Red;\"]').remove();
        let el = el1.select("p a")
        const data = [];
        for (let i = 0; i < el.size(); i++) {
            var e = el.get(i);
            data.push({
                name: e.select("a").text(),
                url: "https://m.58160.net" + e.attr("href"),
                host: "https://m.58160.net"
            })
        }
        return Response.success(data);
    }
    return null;
}