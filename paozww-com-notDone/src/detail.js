function execute(url) {
    let response = fetch(url + "/");
    if (response.ok) {

        let doc = response.html();
        let coverImg = doc.select("#fmimg img").first().attr("src");
        if (coverImg.startsWith("//")) {
            coverImg = "https:" + coverImg;
        }
        let author =  doc.select("#info p").first().text().replace(/作\s*者：/g, "");
        return Response.success({
            name: doc.select("#info h1").text(),
            cover: coverImg,
            author: author,
            description: doc.select("#intro").text(),
            detail: "作者： " + author + "<br>" + doc.select("#info p").last().text(),
            host: "https://www.paozww.com"
        });
    }
    return null;
}

// "63.第63章 无上极境，诸神共鸣" --> "第63章 无上极境，诸神共鸣"
function formatName(name) {
    var re = /^(\d+)\.第(\d+)章/;

    return name.replace(re, '第$2章');
}

//clear rác
function clean(htm){
    htm = htm.replace(/(<br>\s*){2,}/g,'<br>');
    htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g,'');
    htm = htm.replace(/&(nbsp|amp|quot|lt|gt);/g, "");
    htm = htm.replace(/<!--(<br \/>)?[^>]*-->/gm, '');
    return htm;
}