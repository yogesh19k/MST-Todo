import React, { useState } from 'react';
import Modal from 'react-modal';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useMst } from '@/Models/Root';
import { useAlert } from "react-alert";
import {ModalCreateInterface,Task} from "@/Models/Types"

const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#Root');


export default function CreateModal({modalIsOpen,closeModal}:ModalCreateInterface) {
    const [modalForm,SetModalForm]= useState<Task>({
        date:new Date(),
        title:"",
        disc: "",
        status:"To Do",
    })

    const alert = useAlert();
    const { todos } = useMst();
    
    function handelSubmit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        if(modalForm.title==""){
            alert.error("Please Enter A Title!");
            return
        }
        else if(modalForm.disc==""){
            alert.error("Please Enter A Description!");
            return
        }
        todos.addTodo(modalForm)
        alert.success("Task Created")
        closeModal()
    }
    return (
    <div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Task">
        <form
            className="w-96 h-96 text-lg">
            <div className='flex justify-between items-center text-2xl mb-5'>
                <h5>Add Task</h5>
                <span 
                    className="text-red-600 hover:cursor-pointer
                    hover:text-red-500"
                    onClick={e=>{
                        e.preventDefault();
                        closeModal()}}>
                    <AiOutlineCloseCircle/>
                </span>
            </div>
            <div className='flex items-center mb-3'>
                <p className='pr-5'>Date:</p>
                <input 
                    className='border px-2 border-gray-400 rounded-lg 
                    hover:border-blue-500 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:shadow-sm focus-visible:shadow-blue-500'
                    value={modalForm.date.toLocaleDateString('en-CA')}
                    onChange={e=> SetModalForm(prev => ({
                        ...prev,
                        date:(new Date(e.target.value))
                    }))}
                    min={new Date().toISOString().split('T')[0]}
                    type='date'/>
            </div>
            <div className='flex items-center mb-3'>
                <p className='pr-2'>Add Title:</p>
                <input 
                    className='border border-gray-400 rounded-lg px-2 w-72 h-8 text-base
                    hover:border-blue-500 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:shadow-sm focus-visible:shadow-blue-500'
                    placeholder='Enter a title for the task'
                    value={modalForm.title}
                    onChange={e => SetModalForm(prev => ({
                        ...prev,
                        title:e.target.value
                    }))}
                    type='text'/>
            </div>
            <div className='flex mb-3'>
                <p className='pr-2' >Add Description:</p>
                <textarea
                    className='border border-gray-400 rounded-lg px-2 w-56 h-32 resize-none text-base
                    hover:border-blue-500 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:shadow-sm focus-visible:shadow-blue-500'
                    placeholder='Enter a Description'
                    value={modalForm.disc}
                    onChange={e => SetModalForm(prev => ({
                        ...prev,
                        disc:e.target.value
                    }))}
                />
            </div>
            <div className='flex mb-3'>
                <p className='pr-2'>Status:</p>
                <select 
                    className='border border-gray-400 rounded-lg px-2 h-8 text-base
                    hover:border-blue-500 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:shadow-sm focus-visible:shadow-blue-500'
                    id="status" 
                    name="status"
                    value={modalForm.status}
                    onChange={e => SetModalForm(prev => ({
                        ...prev,
                        status:e.target.value
                    }))}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div className="mt-10">
                <button
                    className="border border-gray-400 rounded-lg px-3 mr-2 ml-52
                    hover:text-blue-500
                    hover:border-blue-500 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:shadow-sm focus-visible:shadow-blue-500"
                    onClick={e=>{
                        e.preventDefault();
                        closeModal()}}
                >Cancel</button>
                <button
                    className="bg-blue-500 text-white border border-gray-400 rounded-lg px-3
                    hover:bg-blue-400
                    hover:border-blue-500 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:shadow-sm focus-visible:shadow-blue-500"
                    onClick={e=>handelSubmit(e)}
                >Submit</button>
            </div>
        </form>
        </Modal>
    </div>
    );
}