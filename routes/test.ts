import { Router, Response } from 'https://deno.land/x/oak@v6.0.1/mod.ts'
import * as test from '../controllers/test.ts'
const router = new Router();


router
    .get("/", test.getRequest)
    .post('/',test.postRequest);

export default router;