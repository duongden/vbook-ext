function execute() {
    return Response.success([
        {title: "Top Novels", input: "/top-novels/top-rated", script: "gen.js"}
    ]);
}