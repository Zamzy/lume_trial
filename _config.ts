import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  location: new URL("https://example.com/"),
});

site
  .use(postcss())
  .copy("img");

export default site;
