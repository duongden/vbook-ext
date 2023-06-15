function execute(url) {
    url = url.replace('m.ibiquge.info', 'www.ibiquge.info');
    let response = fetch(url);
   
    if (response.ok) {
        let doc = response.html();
        doc.select("#content > div").remove();
        doc.select("#content > p:nth-child(1)").remove();
        let htm = doc.select("#content").html();
        
        htm = htm.replace(/\&nbsp;/g, "").replace("<p> 天才一秒记住本站地址：[笔趣阁] https://www.ibiquge.info/最快更新！无广告！<br><br> <\/p>", "");
        return Response.success(htm);
    }
    return null;
}