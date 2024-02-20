function execute() {
    return Response.success([
        { title: "玄幻", input: "/fenlei/1_", script: "zen.js" },
        { title: "武侠", input: "/fenlei/2_", script: "zen.js" },
        { title: "都市", input: "/fenlei/3_", script: "zen.js" },
        { title: "历史", input: "/fenlei/4_", script: "zen.js" },
        { title: "科幻", input: "/fenlei/6_", script: "zen.js" },
        { title: "游戏", input: "/fenlei/5_", script: "zen.js" },
        { title: "女生", input: "/fenlei/7_", script: "zen.js" },
        { title: "其他", input: "/fenlei/8_", script: "zen.js" }
    ]);
}
