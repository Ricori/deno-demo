//用于热更新，实际就是重启子进程

//带参运行子进程
const run = () => {
  let _process = Deno.run({
    cmd: ["deno", "run", "--allow-net", "--allow-read", "index.ts"],
    cwd: "app",
    env: { "env": "development" },
  });
  return _process;
};

let _porcess = run();
const watcher = Deno.watchFs("./app"); //监听app文件夹
for await (const event of watcher) {
  console.log("kill proceess");
  _porcess.close();
  console.log("restart");
  _porcess = run();
}
