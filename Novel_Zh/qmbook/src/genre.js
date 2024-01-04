function execute() {
    return Response.success([
        { title: "玄幻", input: "/xuanhuan/", script: "zen.js" },
        { title: "武侠", input: "/wuxia/", script: "zen.js" },
        { title: "都市", input: "/dushi/", script: "zen.js" },
        { title: "历史", input: "/lishi/", script: "zen.js" },
        { title: "网游", input: "/wangyou/", script: "zen.js" },
        { title: "科幻", input: "/kehuan/", script: "zen.js" },
        { title: "女生", input: "/mm/", script: "zen.js" },
        { title: "完本", input: "/finish/", script: "zen.js" }
    ]);
}
