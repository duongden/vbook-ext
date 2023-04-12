function execute(url) {
    url = url.replace('m.dawujiasu.com', 'www.dawujiasu.com');
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');

        let coverImg = doc.select("div.img > img").attr("src");
        let descriptionMeta = doc.select("#intro").html();
         let novelTitle = doc.select(".info h1").first().text();
         let newChap = doc.select("#maininfo > div.info > span a").first().text();
         let author = doc.select(".info h3").first().text();
         let novelCategory = doc.select("#maininfo > div.info > p:nth-child(3)").first().text().replace("所属类型：","");
         let status = doc.select("#maininfo > div.info > p:nth-child(5)").first().text().replace("连载完成：","");
         let updateTime = doc.select(".info p.s").first().text().replace(/\d\d:\d\d:\d\d/g, "");

        if (coverImg.startsWith("/")) {
            coverImg = "https://www.dawujiasu.com" + coverImg;
        }
        return Response.success({
            name: novelTitle,
            cover: coverImg,
            author: author,
            description: ("Thể loại: ") + novelCategory + '<br>' + "Tình trạng: " + status + '<br>' + "Mới nhất: " + newChap  + '<br>' + updateTime + '<br>' + descriptionMeta,
            detail: "Tác giả: " + author,
            host: "https://www.dawujiasu.com"
        });
    }
    return null;
}