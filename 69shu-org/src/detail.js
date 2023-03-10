function execute(url) {
    const doc = Http.get(url).html();

    let coverImg = doc.select('meta[property="og:image"]').attr("content");
    let descriptionMeta = doc.select('meta[property="og:description"]').attr("content");
    let novelTitle = doc.select('meta[property="og:title"]').attr("content");
    let newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content");
    let author = doc.select('meta[property="og:novel:author"]').attr("content");
    let novelCategory = doc.select('meta[property="og:novel:category"]').attr("content");

    return Response.success({
        name: novelTitle,
        cover: coverImg,
        author: author,
        description: ("<br>Thể loại:<br>") + novelCategory + ("<br>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>") + ("<br>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀<br>") + descriptionMeta,
        detail: "Tác giả：" + author + ("<br>⠀⠀⠀⠀⠀⠀⠀⠀<br>") + "Chương mới：" + newChap,
        host: "https://www.69shu.org"
    });
}