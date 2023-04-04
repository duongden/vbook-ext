function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();
        let coverImg = doc.select(".fmimg img").first().attr("src");
        if (coverImg.startsWith("/")) {
            coverImg = "https://www.17bxwx.com/" + coverImg;
        }
        let author = doc.select("#info > p:nth-child(2)").first().text().replace(/作\s*者：/g, "");
        return Response.success({
            name: doc.select("#info h1").text(),
            cover: coverImg,
            author: author,
            description: "Thời gian cập nhật: " + doc.select("#info > p:nth-child(4)").text().replace(/\d\d:\d\d:\d\d/g, "") + "<br>" + "Mới nhất: " + doc.select("#info > p:nth-child(5)").text() + "<br>" + doc.select("#intro > p:nth-child(2)").text() + "<br>" + doc.select("#intro > p:nth-child(1)").html(),
            detail: "Tác giả：" + author,
            host: "https://www.17bxwx.com/"
        });
    }
    return null;
}