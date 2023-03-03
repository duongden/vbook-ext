function execute() {
    return Response.success([
        { title: "玄幻小说", input: "https://www.9biquge.com/xuanhuan/", script: "zen.js" },
        { title: "修真小说", input: "https://www.9biquge.com/xiuzhen/", script: "zen.js" },
        { title: "都市小说", input: "https://www.9biquge.com/dushi/", script: "zen.js" },
        { title: "历史小说", input: "https://www.9biquge.com/chuanyue/", script: "zen.js" },
        { title: "网游小说", input: "https://www.9biquge.com/wangyou/", script: "zen.js" },
        { title: "科幻小说", input: "https://www.9biquge.com/kehuan/", script: "zen.js" },
        { title: "其它小说", input: "https://www.9biquge.com/qita/", script: "zen.js" }
    ]);
}