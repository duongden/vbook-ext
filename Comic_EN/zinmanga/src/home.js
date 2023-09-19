function execute() {
    return Response.success([
        {title: "Home", input: "https://zinmanga.com/?s&post_type=wp-manga&m_orderby=latest", script: "gen.js"}
    ]);
}