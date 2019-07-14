const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    let paths = {
      '/': { page: '/' }
    };

    for (let i = 0; i < 889; i++) {
      let pageNumber = `${i + 1}`;
      paths[`/page/${pageNumber}`] = { page: '/page/[pageNumber]', query: { pageNumber } };
    }

    return paths;
  }
});
