load('config.js');

function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        doc.select("#noidungm h2").remove();
        doc.select("#noidungm div").remove();
        doc.select("div.truyen_if_wrap > ul > li > span").remove();

        let coverImg = doc.select(".info_image img.attachment-large").attr("src");
        let descriptionMeta = doc.select("#noidungm").first().html();
        let novelTitle = doc.select(".truyen_info_right h1").first().text();
        let author = doc.select("div.cotgiua > div.truyen_info_wrapper > div.truyen_info > div.entry-header > div.truyen_if_wrap > ul > li:nth-child(2) > a").first().text();
        let views = doc.select("div.cotgiua > div.truyen_info_wrapper > div.truyen_info > div.entry-header > div.truyen_if_wrap > ul > li:nth-child(7)").first().text();
        let status = doc.select("div.cotgiua > div.truyen_info_wrapper > div.truyen_info > div.entry-header > div.truyen_if_wrap > ul > li:nth-child(4)").first().text();
        let lastUpdate = doc.select("div.cotgiua > div.truyen_info_wrapper > div.truyen_info > div.entry-header > div.truyen_if_wrap > ul > li:nth-child(6)").first().text().replace(/\d\d:\d\d/g, "");
;

        let genres = [];
        doc.select("div.cotgiua > div.truyen_info_wrapper > div.truyen_info > div.entry-header > div.truyen_if_wrap > ul > li:nth-child(3) > a").forEach(e => {
            genres.push({
                title: e.text()
            });
        });

        let detail = `Tác giả: ${author}<br>Status: ${status}<br>View: ${views}<br>Last Update: ${lastUpdate};`


        return Response.success({
            name: novelTitle,
            author: author,
            cover: coverImg,
            description: descriptionMeta,
            genres: genres,
            detail: detail,
            suggests: [
                {
                    title: "Would you like to read?",
                    input: doc.select(".danh_sach").html(),
                    script: "suggest.js"
                }
            ],
            host: BASE_URL
        });
    }
    return null;
}