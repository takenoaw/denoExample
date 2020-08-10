import { Request, Response, Body } from 'https://deno.land/x/oak@v6.0.1/mod.ts'
// import db from '../config/database.ts';
// import UsersTable from '../models/user.ts';

export const getRequest = ({ request, response, }:
    { request: Request; response: Response; }) => {
    response.body = { message: 'first get Request' };
    response.status = 200
}

export const postRequest = async ({ request, response, }:
    { request: Request; response: Response; }) => {
    const body: Body = request.body();
    const { name, lastname } = await body.value;
    // await UsersTable.create({name,lastname});
    // db.link([UsersTable]);
    response.status = 200;
}