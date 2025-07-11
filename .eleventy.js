const { format } = require("date-fns");

module.exports = function (eleventyConfig) {
  // Blog collection
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./blog/*.md");
  });

  // Fix for `date` filter in Nunjucks
  eleventyConfig.addFilter("date", function (value, formatStr = "yyyy-MM-dd") {
    return format(new Date(value), formatStr);
  });
  // Copy images to docs/images
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  return {
    dir: {
      input: ".",
      output: "docs"
    }
  };
};
