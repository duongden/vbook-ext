function execute() {
    return Response.success([
        {title: "玄幻", input: "/flei/xuanhuan/", script: "zen.js"},
        {title: "仙侠", input: "/flei/xianxia/", script: "zen.js"},
        {title: "都市", input: "/flei/dushi/", script: "zen.js"},
        {title: "历史", input: "/flei/lishi/", script: "zen.js"},
        {title: "游戏", input: "/flei/youxi/", script: "zen.js"},
        {title: "科幻", input: "/flei/kehuan/", script: "zen.js"},
        {title: "恐怖", input: "/flei/kongbu/", script: "zen.js"},
        {title: "其他", input: "/flei/qita/", script: "zen.js"}
    ]);
}