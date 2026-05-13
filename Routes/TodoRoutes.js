const express = require("express")
const fs = require("fs")
const path = require("path")
const router = express.Router()
const uuidv4 = require("uuid").v4
const { TodoItem } = require("../data/TodoItem.json")
const todoFilePath = path.join(__dirname, "../data/TodoItem.json")

router.post('/createTask', (req, res) => {
    try {
        const id = uuidv4()
        console.log(id)
        const { title, description, status, priority, schedule } = req.body
        if (!title || !description || status === undefined || !priority || !schedule) {
            return res.status(400).json({
                error: "All fields are required"
            })
        }
        const item = {
            id,
            title,
            description,
            status,
            priority,
            schedule
        }
        TodoItem.push(item)
        fs.writeFileSync(todoFilePath, JSON.stringify({ TodoItem }, null, 2))
        res.status(200).json({
            item,
            message: "Task created successfully"
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


router.get('/getAllTasks', (req, res) => {
    try {
        res.status(200).json({
            message: "Tasks fetched successfully",
            data: TodoItem
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/getTask/:id', (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({
                error: "Id is required"
            })
        }
        const item = TodoItem.find((item) => item.id === id)
        if (!item) {
            return res.status(404).json({
                error: "Todo item not found"
            })
        }
        res.status(200).json({
            message: "Task fetched successfully",
            data: item
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.get('/getCompletedTask', (req, res) => {
    try {
        const items = TodoItem.filter((item) => item.status === true)
        res.status(200).json({
            message: "Completed Tasks fetched successfully",
            data: items
        })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.patch('/updateTask/:id', (req, res) => {
    try{
        const {id}=req.params
        if(!id){
            return res.status(400).json({
                error:"Id is required"
            })
        }
        const item=TodoItem.find((item)=>item.id===id)
        if(!item){
            return res.status(404).json({
                error:"Todo item not found"
            })
        }
        const updatedItem={...item,...req.body}
        TodoItem.splice(TodoItem.findIndex((item)=>item.id===id),1,updatedItem)
        fs.writeFileSync(todoFilePath,JSON.stringify({TodoItem},null,2))
        res.status(200).json({
            message:"Task updated successfully",
            data:updatedItem
        })
    }catch(err){
        res.status(500).json({ error: err.message })
    }   
})

router.delete('/deleteTask/:id', (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).json({
                error: "Id is required"
            })
        }
        const index = TodoItem.findIndex((item) => item.id === id)
        if (index === -1) {
            return res.status(404).json({
                error: "Todo item not found"
            })
        }
        else {
            TodoItem.splice(index, 1)
            fs.writeFileSync(todoFilePath, JSON.stringify({ TodoItem }, null, 2))
            res.status(200).json({
                message: "Todo item deleted successfully",
                data: TodoItem
            })
        }
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})



module.exports = router
