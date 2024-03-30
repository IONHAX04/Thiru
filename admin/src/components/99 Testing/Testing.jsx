import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from './List'
import { baseURL } from '../101 utils/constants';

export default function Testing() {
    const [input, setInput] = useState("");
    const [task, setTask] = useState([]);
    const [updateUI, setUpdateUI] = useState(false);
    const [updateId, setUpdateId] = useState(null);

    useEffect(() => {
        axios.get(`${baseURL}/get`)
            .then((res) => {
                console.log(res.data);
                setTask(res.data);
            })
    }, [updateUI]);

    const addTask = () => {
        axios.post(`${baseURL}/save`, { task: input }).then((res) => {
            console.log("res", res.data);
            setInput("");
            setUpdateUI((prevState) => !prevState);
        })
    }

    const updateMode = (id, text) => {
        console.log(text);
        setInput(text)
        setUpdateId(id)
    }

    const updateTask = () => {
        axios.put(`${baseURL}/update/${updateId}`, { task: input }).then((res) => {
            console.log(res.data);
            setUpdateUI((prevState) => !prevState);
            setUpdateId(null);
            setInput("");
        })
    }

    return (
        <main>
            <h1 className='title'>TESTING</h1>
            <div className="input_holder">
                <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
                <button type='submit' onClick={updateId ? updateTask : addTask}> {updateId ? "Update Task" : "Add Task"}</button>
            </div>
            <ul>
                {task.map((task =>
                    <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} updateMode={updateMode} />
                ))}
            </ul>
        </main>
    )
}
