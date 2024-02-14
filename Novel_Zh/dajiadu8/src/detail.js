load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html('gbk');
        let coverImg = doc.select('.catalog_pic img').attr("src");
        let descriptionMeta = doc.select('.catalognovel_intro').first().html();
        let title = doc.select('.novelname').first().text();
        let status = doc.select('.catalognovel_type .p1').first().text();
        let newChap = doc.select('.catalognovel_newest a').first().text();
        let author = doc.select('.novelauthor a').first().text();
        let category = doc.select('.catalognovel_type .p2').first().text();

        return Response.success({
            name: title,
            cover: coverImg,
            author: author,
            description: descriptionMeta,
            detail: "Tác giả: " + author  + '<br>' +  "Thể loại: " + category + '<br>' + "Tình trạng: " + status + '<br>' + "Mới nhất: " + newChap,
            host: BASE_URL
        });
    }
    return null;
}