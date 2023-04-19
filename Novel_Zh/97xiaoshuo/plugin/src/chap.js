function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let doc = response.html();

        let htm = doc.select("#content p.content_detail").html();
        console.log("blacktea");
        htm = htm.replace(/<a[^>]*>([^<]+)<\/a>/g, '')
            .replace(/ ?\n/g, "<br>")
            .replace(/<\/?p>/g, "")
            .replace(/&(nbsp|amp|quot|lt|gt);/g, "")
            .replace("首发网址ｍ．97xｉaoｓhuo。nｅt", "")
            .replace("qiushu.cc [*.?]", "")
            .replace("一秒记住hｔｔps：//m.97ｘiaｏshuo.ｎet", "")
            .replace("（wwW.80txt.com 无弹窗广告）", "")
            .replace("（WWW.mianhuatang.CC 好看的小说棉花糖", "")
            .replace("最新章节！", '')
            .replace("笔趣阁", '')
            .replace("记住网址ｍ.97ｘｉaoｓhuo．neｔ", "");
        return Response.success(htm);
    }
    return null;
}
