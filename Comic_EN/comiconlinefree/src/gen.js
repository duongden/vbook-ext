function execute(url, page) {
    if (!page) page = '1';

    let response = fetch("https://comiconlinefree.net" + url + "/" + page);
    console.log("https://comiconlinefree.net" + url + "/" + page)
    if (response.ok) {
        let doc = response.html();
        const data = [];

        doc.select(".home-list .hlb-t").forEach(e => {
            let coverImg = "https://raw.githubusercontent.com/duongden/vbook/main/coverComicGeneral.png"
            data.push({
                name: e.select("a.hlb-name").first().text(),
                link: e.select("a.hlb-name").first().attr("href"),
                cover: coverImg,
                description: "Updated: " + e.select(".date").first().text(),
                host: "https://comiconlinefree.net"
            })
        });
        var next = (parseInt(page)+1).toString();
        return Response.success(data, next);
    }
    return null;
}