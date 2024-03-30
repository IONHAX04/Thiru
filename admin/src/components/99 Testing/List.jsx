import React from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { BsTrash } from 'react-icons/bs'
import axios from 'axios'
import { baseURL } from '../101 utils/constants';

export default function List({ id, task, setUpdateUI, updateMode}) {

    const removeTask = () => {
        axios.delete(`${baseURL}/delete/${id}`).then((res) => {
            console.log("Res", res);
            setUpdateUI((prevState) => !prevState);
        })
    }

    return (
        <li>
            {task}
            <div className="icon_holder">
                <BiEditAlt className='icon' onClick={() => updateMode(id, task)} />
                <BsTrash className='icon' onClick={removeTask} />
            </div>
        </li>
    )
}
