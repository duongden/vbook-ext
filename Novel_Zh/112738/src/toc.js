load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    url = url.replace("book","indexlist").replace(".html","/")
    let response1 = fetch(url);
    const data = [];
    if (response1.ok) {
        let doc1 = response1.html();
        let elr1 = doc1.select("#indexselect").first().select("option");
        elr1.forEach((element) => {
            let url1 = BASE_URL + element.attr("value");

            let response2 = fetch(url1);
            if (response2.ok) {
                let doc = response2.html();
                let el1 = doc.select("#content_1").last().select("a");
                for (let i = 0;i < el1.size(); i++) {
                    var e = el1.get(i);
                    data.push({
                        name: e.select("a").text(),
                        url: BASE_URL + e.attr("href"),
                        host: BASE_URL
                    })
                }
            }



        })


        return Response.success(data);
    }
    return null;
}