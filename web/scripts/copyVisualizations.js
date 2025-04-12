import fs from "fs";


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
}
  

run()
