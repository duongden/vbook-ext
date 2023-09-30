function execute() {
    return Response.success([
        {title: "Được xem nhiều", input: "https://anhtinh.com/popular", script: "gen.js"},
        {title: "Trending", input: "https://anhtinh.com/trending", script: "gen.js"},
        {title: "Truyện hay", input: "https://anhtinh.com/featured", script: "gen.js"},
        {title: "Vừa cập nhật", input: "https://anhtinh.com/updates", script: "gen.js"},
        {title: "Truyện mới đăng", input: "https://anhtinh.com/latest", script: "gen.js"},
        {title: "Ngôn tình", input: "https://anhtinh.com/genre/ngon-tinh", script: "gen.js"},
        {title: "Romance", input: "https://anhtinh.com/genre/romance", script: "gen.js"},
        {title: "Manhua", input: "https://anhtinh.com/genre/manhua", script: "gen.js"},
        {title: "Truyện Màu", input: "https://anhtinh.com/genre/truyen-mau", script: "gen.js"},
        {title: "Đam Mỹ", input: "https://anhtinh.com/genre/dam-my", script: "gen.js"},
        {title: "Comedy", input: "https://anhtinh.com/genre/comedy", script: "gen.js"},
        {title: "Manhwa", input: "https://anhtinh.com/genre/manhwa", script: "gen.js"},
        {title: "Shoujo", input: "https://anhtinh.com/genre/shoujo", script: "gen.js"},
        {title: "Yaoi", input: "https://anhtinh.com/genre/yaoi", script: "gen.js"},
        {title: "Drama", input: "https://anhtinh.com/genre/drama", script: "gen.js"}
    ]);
}