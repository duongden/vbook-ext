function execute(url) {
    url = url.replace('m.dubuxiaoshuo.com', 'www.dubuxiaoshuo.com');
    const doc = fetch(url).html();
     doc.select("script").remove();
    var content = doc.select("#cont-body").html();
    var nextPage = doc.select('.text-center a').last();
    while (nextPage.text() === '上一页') {
        var doc2 = fetch("http://www.dubuxiaoshuo.com" + nextPage.attr('href')).html();
        content += doc2.select("#cont-body").html();
        var nextPage = doc2.select('.text-center a').last();
    }
    content = content.replace(/<p><\/p>/g, '')
    return Response.success(content);
}