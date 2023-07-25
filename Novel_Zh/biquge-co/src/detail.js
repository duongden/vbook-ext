load('libs.js');

function execute(url) {
    var host = 'https://www.biquge.co';
    url = url.replace('m.biquge.co', 'www.biquge.co').append('/');
    var doc = Http.get(url).html('gbk');
    var coverImg = doc.select('meta[property="og:image"]').attr("content");
    var novelTitle = doc.select('meta[property="og:title"]').attr("content");
    var newChap = doc.select('meta[property="og:novel:latest_chapter_name"]').attr("content");
    var author = doc.select('meta[property="og:novel:author"]').attr("content");
    var novelCategory = doc.select('meta[property="og:novel:category"]').attr("content");
    var updateTime = doc.select('meta[property="og:novel:update_time"]').attr("content").replace(/\d\d:\d\d:\d\d/g, "");

    return Response.success({
        name: novelTitle,
        cover: coverImg,
        author: "Tác giả: " + author,
        description: doc.select("#intro").html(),
        detail: "Thể loại: " + novelCategory + '<br>' + '<br>' + "Mới nhất: " + newChap  + '<br>' + "Thời gian cập nhật: " + updateTime,
        host: host
    });
}