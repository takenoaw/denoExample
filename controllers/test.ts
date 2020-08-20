import { Request, Response, Body } from 'https://deno.land/x/oak@v6.0.1/mod.ts'
import UsersTable from '../models/user.ts';
import db from '../config/database.ts';
import { v4 } from "https://deno.land/std/uuid/mod.ts";

export const getRequest = ({ request, response, }:
    { request: Request; response: Response; }) => {
    response.body = { message: 'first get Request' };
    response.status = 200;
}

export const postRequest = async ({ request, response, }:
    { request: Request; response: Response; }) => {
    const body: Body = request.body();
    const { name, lastname } = await body.value;
    db.link([UsersTable]);

    try {
        const id = v4.generate();
        await UsersTable.create({
            id,
            name,
            lastname
        })
        // const res = await UsersTable.count();
        const count:Number = await UsersTable.count();
        response.body ={ message:'user created succesful' ,count}
        response.status = 200;
    } catch (error) {
        response.body ={ message:'user exists' }
        response.status = 400;
    }
}