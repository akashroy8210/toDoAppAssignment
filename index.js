const express=require("express")
const dotenv=require("dotenv")
const TodoRoutes=require("./Routes/TodoRoutes")
const uuidv4=require("uuid").v4
dotenv.config()
const app=express()
const id=uuidv4()

app.get('/',(req,res)=>{
    res.send("hello from the Backend")
})
app.use(express.json())
app.use('/api/user',TodoRoutes)
const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
    console.log(id)
})