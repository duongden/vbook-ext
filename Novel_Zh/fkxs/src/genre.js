function execute() {
    return Response.success([
        { title: "玄幻小说", input: "/xuanhuanxiaoshuo/", script: "zen.js" },
        { title: "修真小说", input: "/xiuzhenxiaoshuo/", script: "zen.js" },
        { title: "都市小说", input: "/dushixiaoshuo/", script: "zen.js" },
        { title: "穿越小说", input: "/chuanyuexiaoshuo/", script: "zen.js" },
        { title: "网游小说", input: "/wangyouxiaoshuo/", script: "zen.js" },
        { title: "科幻小说", input: "/kehuanxiaoshuo/", script: "zen.js" },
        { title: "其他小说", input: "/qitaxiaoshuo/", script: "zen.js" }
    ]);
}
