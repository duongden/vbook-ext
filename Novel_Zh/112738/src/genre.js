function execute() {
    return Response.success([
        {title: "玄幻", input:  "/class/xuanhuan/", script: "zen.js"},
        {title: "都市", input:  "/class/dushi/", script: "zen.js"},
        {title: "武侠", input:  "/class/wuxia/", script: "zen.js"},
        {title: "耽美", input:  "/class/danmei/", script: "zen.js"},
        {title: "科幻", input:  "/class/kehuan/", script: "zen.js"},
        {title: "轻小", input:  "/class/lightnovel/", script: "zen.js"},
        {title: "历史", input:  "/class/lishi/", script: "zen.js"},
        {title: "言情", input:  "/class/yanqing/", script: "zen.js"}

    ]);
}