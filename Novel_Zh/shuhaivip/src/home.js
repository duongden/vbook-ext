function execute() {
    return Response.success([
        { title: "书库", input: "all", script: "gen.js" },
        { title: "玄幻", input: "xuanhuan", script: "gen.js" },
        { title: "仙侠", input: "xianxia", script: "gen.js" },
        { title: "都市", input: "dushi", script: "gen.js" },
        { title: "军史", input: "junshi", script: "gen.js" },
        { title: "网游", input: "wangyou", script: "gen.js" },
        { title: "科幻", input: "kehuan", script: "gen.js" },
        { title: "灵异", input: "lingyi", script: "gen.js" },
        { title: "其他", input: "qita", script: "gen.js" }
    ]);
}