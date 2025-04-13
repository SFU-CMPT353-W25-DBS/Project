import fs from "fs";
import minifyHtml from "@minify-html/node";

const visualizationPaths = [
  "5.visualize/html",
  // "5.visualize/aesthetic/html",
]

const dest = "./public/rawVisuals/";


function run() {
  visualizationPaths.forEach(path => {
    const src = `../code/${path}`;
    if (!fs.existsSync(src)) {
      console.error(`Source directory ${src} does not exist.`);
      return;
    };

    fs.cpSync(
      src,
      dest,
      {
        recursive: true,
        force: true
      }
    )
  })

  // minify all html files in ./public/visuals
  const files = fs.readdirSync(dest);
  files.forEach(file => {
    if (file.endsWith(".html")) {
      const filePath = `${dest}${file}`;
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
