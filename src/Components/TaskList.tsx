import { useMst } from "@/Models/Root";
import { observer } from "mobx-react-lite";
import { Props } from "next/script"
import React, { useEffect, useState } from "react";
import {FiEdit} from "react-icons/fi"
import {ImBin} from "react-icons/im"
import EditModel from "./EditModal";
import {TodoType,Task} from "@/Models/Types"


const TaskList :React.FC<Props>= observer(() =>{
    const [domLoaded, setDomLoaded] = useState(false);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [editTask,setEditTask] = useState<Task>()
    const { todos } = useMst()
    
    useEffect(() => {
        setDomLoaded(true);
    }, []);

    function handelEdit(task:TodoType){
        setEditTask({
            date:task.date,
            title:task.title,
            disc:task.disc,
            status:task.status,
        })
        task.remove()
        setIsOpen(true)
    }

    function onModalClose(editedTask:Task | any){
        setIsOpen(false)
        setEditTask(undefined)
        todos.addTodo(editedTask || editTask)
    }

    const taskElement= todos.todoList.map((task:TodoType) =>{ 
        return(
            <div key={task.disc} className="grid grid-cols-layout w-full">
                <div className="p-2 border-r-2 border-b-2 border-gray-300 overflow-hidden ">{task.date.toLocaleDateString()}</div>
                <div className="p-2 border-r-2 border-b-2 border-gray-300">{task.status}</div>
                <div className="p-2 border-r-2 border-b-2 border-gray-300 overflow-hidden">{task.title}</div>
                <div className="p-2 border-r-2 border-b-2 border-gray-300 overflow-hidden">{task.disc}</div>
                <div className="py-2 border-b-2 border-gray-300 flex justify-evenly items-center">
                    <span
                        className="text-blue-600 text-lg hover:cursor-pointer"
                        onClick={(e)=>handelEdit(task)}>
                        <FiEdit/>
                    </span>
                    <span 
                        className="text-red-600 hover:cursor-pointer"
                        onClick={task.remove}>
                        <ImBin/>
                    </span>
                </div>
            </div>
        )
    })

    return(
        <>
        {domLoaded && (
            <div>
            {taskElement.length==0?
                <span className="h-full flex justify-center items-center"><p>No Task Present</p></span>
            :taskElement}
            {modalIsOpen && editTask && <EditModel 
                    closeModal={onModalClose}
                    modalIsOpen={modalIsOpen}
                    editTask={editTask}/>}
            </div>
            )}
        </>
    )
})

export default TaskList