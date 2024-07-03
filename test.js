import {Oxdb ,pushData}from "ox-db"
const db = new Oxdb("http://127.0.0.1:8000");
const result = await db.push(pushData);
console.log(result)