const{MongoClient}=require("mongodb");
const url="mongodb://127.0.0.1:27017";
const client=new MongoClient(url);
const database="school";
const dbconnect=async()=>{
    try{
        let connection=await client.connect();
        let dbconnection=await connection.db(database);
        let response=await dbconnection.collection("students").insertMany([{name: 'prema',
    age: 18,
    grade: 9,
    subjects: [ 'maths', 'chemistry', 'english' ],
    schoolName: 'srichaitanya'},{name: 'teju',
    age: 19,
    grade: 8,
    subjects: [ 'social', 'physics', 'english' ],
    schoolName: 'valmeeki'}]);
    return response;
    }catch(error){
        console.log("db connect fun error===",error);
    }
}
dbconnect().then((data)=>{
    console.log("data===",data);
}).catch((error)=>{
    console.log("errror===",error);
})