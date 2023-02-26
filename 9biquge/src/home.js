function execute() {
    return Response.success([
        { title: "首页", input: "https://www.9biquge.com/", script: "gen.js" },
        { title: "玄幻小说", input: "https://www.9biquge.com/xuanhuan/", script: "gen.js" },
        { title: "修真小说", input: "https://www.9biquge.com/xiuzhen/", script: "gen.js" },
        { title: "都市小说", input: "https://www.9biquge.com/dushi/", script: "gen.js" },
        { title: "历史小说", input: "https://www.9biquge.com/chuanyue/", script: "gen.js" },
        { title: "网游小说", input: "https://www.9biquge.com/wangyou/", script: "gen.js" },
        { title: "科幻小说", input: "https://www.9biquge.com/kehuan/", script: "gen.js" },
        { title: "其它小说", input: "https://www.9biquge.com/qita/", script: "gen.js" }
    ]);
}