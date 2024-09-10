module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.js");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("cory_streiff_resume.pdf");

  eleventyConfig.addWatchTarget("styles.css");
};
