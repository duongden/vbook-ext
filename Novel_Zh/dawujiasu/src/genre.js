function execute() {
    return Response.success([
        {title: "玄幻", input: "/xuanhuanxiaoshuo/", script: "zen.js"},
        {title: "修真", input: "/xiuzhenxiaoshuo/", script: "zen.js"},
        {title: "都市", input: "/dushixiaoshuo/", script: "zen.js"},
        {title: "历史", input: "/lishixiaoshuo/", script: "zen.js"},
        {title: "网游", input: "/wangyouxiaoshuo/", script: "zen.js"},
        {title: "科幻", input: "/kehuanxiaoshuo/", script: "zen.js"},
        {title: "其他", input: "/qitaxiaoshuo/", script: "zen.js"}
    ]);
}