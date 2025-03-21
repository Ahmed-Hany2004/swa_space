const {MongoClient} =require("mongodb");
require("dotenv").config();

url=process.env.url
const dbname= process.env.db_name
const client = new MongoClient(url);

const db = client.db(dbname);

const connectionString = process.env.MONGO_URI;
if (!connectionString) {
    console.error("سلسلة الاتصال بقاعدة البيانات غير موجودة!");
    process.exit(1); // إيقاف التنفيذ إذا كانت السلسلة غير موجودة
}

async function main(app) {
    // Use connect method to connect to the server
    try{
    await client.connect();
    console.log('Connected successfully to server');
    
    }
    catch{(err)=>console.log(err);}

    // the following code examples can be pasted here...
    app.listen(process.env.port,()=>console.log("server run on port 3000"));
    return 'done.';
}

module.exports = {
  main,
    db,
};