function execute(url) {
    var doc = Http.get(url).html();
    if (doc) {
        doc.select("noscript").remove();
        doc.select("script").remove();
        doc.select("iframe").remove();
        doc.select("ins").remove();
        doc.select("a").remove();
        doc.select("#vuong-tinhlinh").remove();
        var txt = doc.select(".story-content-3 article");
        txt.select("div").remove();
        console.log(txt)
        return Response.success(txt);
    }
    return null;
}
