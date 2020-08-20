import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';

class UsersTable extends Model {
    // ...
    static table = 'User';
    static timestamps = true;
    static fields = {
        id: {type: DataTypes.INTEGER, primaryKey:true},
        name: DataTypes.STRING,
        lastname:DataTypes.STRING
    };
}


export default UsersTable;