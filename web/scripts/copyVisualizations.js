import fs from "fs";
import minifyHtml from "@minify-html/node";


function run() {
  if (!fs.existsSync("../code/5.visualize/html")) return;

  fs.cpSync(
    "../code/5.visualize/html",
    "./public/visuals",
    {
      recursive: true,
      force: true
    }
  )

  // minify all html files in ./public/visuals
  const files = fs.readdirSync("./public/visuals");
  files.forEach(file => {
    if (file.endsWith(".html")) {
      const filePath = `./public/visuals/${file}`;
      // read file contents as buffer
      const fileBuffer = fs.readFileSync(filePath);
      const minifiedContent = minifyHtml.minify(fileBuffer, {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      });
      fs.writeFileSync(filePath, minifiedContent);
    }
  })
}
  
run()
