function execute(url) {
    if (url.slice(-1) !== "/")
        url = url + "/";
    url = url.replace('m.97xiaoshuo.net', 'www.97xiaoshuo.net');
    let response = fetch(url);
    if (response.ok) {

        let doc = response.html();
        let coverImg = doc.select("#fmimg img").first().attr("src");
        if (coverImg.startsWith("/")) {
            coverImg = "https://www.97xiaoshuo.net/" + coverImg;
        }
        let author = doc.select("#info p").first().text().replace(/作\s*者：/g, "")

        return Response.success({
            name: doc.select("#info h1").text(),
            cover: coverImg,
            author: author,
            description: doc.select("#intro").first().text().replace(/\\n/g, "<br>"),
            detail: "Tác giả：" + author + ("<br>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>") + doc.select("#info > p:nth-child(4)").text().replace(/\d\d:\d\d:\d\d/g, "").replace("最后更新", "Cập nhật") + ("<br>⠀⠀⠀⠀⠀<br>") + doc.select("#info > p:nth-child(6)").text().replace("书籍状态", "Trạng thái"),
            host: "https://www.97xiaoshuo.net/"
        });
    }
    return null;
}