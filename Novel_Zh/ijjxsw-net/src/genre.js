function execute() {
    return Response.success([
        { title: "穿越", input: "/html/chuanyue/", script: "zen.js" },
        { title: "言情", input: "/html/yanqing/", script: "zen.js" },
        { title: "现代", input: "/html/dushi/", script: "zen.js" },
        { title: "武侠", input: "/html/wuxia/", script: "zen.js" },
        { title: "玄幻", input: "/html/xuanhuan/", script: "zen.js" },
        { title: "科幻", input: "/html/kehuan/", script: "zen.js" },
        { title: "网游", input: "/html/wangyou/", script: "zen.js" }
    ]);
}