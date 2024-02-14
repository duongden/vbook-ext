function execute() {
    return Response.success([
        { title: "玄幻魔法", input: "/xuanhuan/", script: "zen.js" },
        { title: "仙侠修真", input: "/xianxia/", script: "zen.js" },
        { title: "都市言情", input: "/dushi/", script: "zen.js" },
        { title: "历史军事", input: "/lishi/", script: "zen.js" },
        { title: "网游竞技", input: "/wangyou/", script: "zen.js" },
        { title: "科幻小说", input: "/kehuan/", script: "zen.js" },
        { title: "恐怖灵异", input: "/kongbu/", script: "zen.js" },
        { title: "其他小说", input: "/qita/", script: "zen.js" },
    ]);
}