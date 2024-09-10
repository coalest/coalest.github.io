module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("cory_streiff_resume.pdf");
  eleventyConfig.addPassthroughCopy({ "img/favicon": "/" });

  eleventyConfig.addWatchTarget("styles.css");
};
