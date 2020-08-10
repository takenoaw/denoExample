import { Application } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import { organ } from "https://raw.githubusercontent.com/denjucks/organ/master/mod.ts";

import router from './routes/test.ts'

const app = new Application();

//middlewares
app.use(organ('dev'));
app.use(router.routes());
app.use(router.allowedMethods());

export default app;