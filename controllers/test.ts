import { Request, Response, Body } from 'https://deno.land/x/oak@v6.0.1/mod.ts'
import UsersTable from '../models/user.ts';
import db from '../config/database.ts';
import { v4 } from "https://deno.land/std/uuid/mod.ts";

export const getRequest = async({ request, response, }:
    { request: Request; response: Response; }) => {
    try {
        db.link([UsersTable]);
        const res = await UsersTable.select('name','lastname').all();
        response.body = { res };
        response.status = 200;
    } catch (error) {
        response.body = { error };
        response.status = 400;
    }
}

export const postRequest = async ({ request, response, }:
    { request: Request; response: Response; }) => {
    const body: Body = request.body();
    const { name, lastname } = await body.value;

    try {
        db.link([UsersTable]);
        const id = v4.generate();
        await UsersTable.create({
            id,
            name,
            lastname
        })
        response.body ={ message:'user created succesful' }
        response.status = 200;
    } catch (error) {
        response.body ={ message: 'something went wrong' }
        response.status = 400;
    }
}