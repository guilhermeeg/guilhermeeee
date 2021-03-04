const {Pool} = require('pg');

async function criarConexao(){
    const poll = new Pool({
        connectionString: '',
        ssl: {
            rejectUnauthorized: false
        }
    });
    let con = await poll.connect(); 
    /*await con.query(`create table pizza(
            id serial,
            tamanho varchar,
            sabor varchar,
            constraint pizza_pk primary key (id)
        )`
    );

    await con.query(
        `insert into pizza(tamanho, sabor) values 
            ($1, $2)`, 
            ['grande', 'queijo']
    );
    await con.query(
        `insert into pizza(tamanho, sabor) values 
            ($1, $2), ($3, $4), ($5, $6)`, 
            ["gigante", "portuguesa", "familia", "espanhola","grande", "beijinho"]
    );
  await con.query("delete from pizza where sabor like $1", ["portuguesa%"]);
  await con.query(`update pizza set tamanho = $1 where id = $2`, ['pequena', 3]);*/

    let res = await con.query('select * from pizza');
    console.log(res);
    con.release();   
}
criarConexao();