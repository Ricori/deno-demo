import { oak } from "./lib/index.ts";
import _static from "./utils/static.ts";
const { Application, Router } = oak;
const router = new Router();

/*
router.get("/", (context: any) => {
  context.response.body = "Hello";
});
*/

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_static); //处理静态资源的中间件

console.log("start at point 8000");
app.listen({ port: 8000 });
