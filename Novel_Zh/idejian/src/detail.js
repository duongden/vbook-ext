function execute(url) {
    url = url.replace('m.idejian.com', 'www.idejian.com');
    if (url.slice(-1) !== "/")
        url = url + "/";
        let response = fetch(url);
        if (response.ok) {
            let doc = response.html();
            ///// ELEMENT INFO TRUYEN /////
            let author = doc.select(".detail_bkauthor").first().text();
            let title = doc.select(".detail_bkinfo .detail_bkname a").text();
            let coverImg = doc.select(".detail_bkinfo .book_img > img").attr("src");
            let category = doc.select(".detail_bkgrade > span:nth-child(2)").text();
            let descriptionMeta = doc.select(".bk_brief .brief_con").html();
            let status = doc.select(".detail_bkgrade > span.light_box").html();
            
//.detail_tab_nav > a:nth-child(2)
            ///// END ELEMENT INFO TRUYEN /////

            ///// LOAD INFO TRUYEN /////
            return Response.success({
                name: title,
                cover: coverImg,
                author: author,
                description: descriptionMeta, //// phần giới thiệu chỗ detail
                detail: "Tác giả: " + author + '<br>' + "Thể loại: " + category + '<br>' + "Tình trạng: " + status, //// phần thông tin chỗ detail
                host: "https://www.idejian.com"
            });
        }
        return null;
    }