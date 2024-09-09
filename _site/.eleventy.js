module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.js");

  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addWatchTarget("styles.css");
};
