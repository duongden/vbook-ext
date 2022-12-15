function execute() {
    return Response.success([
        {title: "玄幻魔法", input:  "https://www.youyoukanshu.com/sort/xuanhuanmofa", script: "zen.js"},
        {title: "武侠修真", input:  "https://www.youyoukanshu.com/sort/wuxiaxiuzhen", script: "zen.js"},
        {title: "都市言情", input:  "https://www.youyoukanshu.com/sort/dushiyanqing", script: "zen.js"},
        {title: "历史军事", input:  "https://www.youyoukanshu.com/sort/lishijunshi", script: "zen.js"},
        {title: "恐怖灵异", input:  "https://www.youyoukanshu.com/sort/kongbulingyi", script: "zen.js"},
        {title: "其他类型", input:  "https://www.youyoukanshu.com/sort/qita", script: "zen.js"},
    ]);
}