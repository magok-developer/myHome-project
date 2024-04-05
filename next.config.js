// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://api.odcloud.kr/:path*", // 원본 API 주소
      },
    ];
  },
};
