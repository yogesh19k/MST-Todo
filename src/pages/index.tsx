import TaskList from "@/Components/TaskList"
import React from "react";
import CreateModal from "@/Components/CreateModal"
import {AiOutlinePlus} from "react-icons/ai"
import Head  from "next/head";


export default function Home() {
    const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
    return (
        <>
            <Head>
                <title>MST-Todo</title>
                <meta name="description" content="Todo App" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/todo-icon.png" />
            </Head>
            <div className="bg-gradient-to-r from-cyan-900 to-blue-900 h-screen w-screen flex justify-center items-center" id="Root">
                <div className="bg-white w-5/6 h-5/6 rounded-xl  grid grid-rows-layout overflow-hidden relative
                    border-2 border-blue-500">
                    <div className="grid grid-cols-layout  bg-gray-100">
                        <div className="p-2 border-r-2 border-b-2 border-gray-300">Date</div>
                        <div className="p-2 border-r-2 border-b-2 border-gray-300">Status</div>
                        <div className="p-2 border-r-2 border-b-2 border-gray-300">Title</div>
                        <div className="p-2 border-r-2 border-b-2 border-gray-300">Description</div>
                        <div className="p-2 border-b-2 border-gray-300">Action</div>
                    </div>
                    <TaskList/>
                    <div className="bg-blue-500 w-11 h-11 rounded-3xl flex justify-center items-center text-2xl text-white font-extrabold absolute bottom-5 right-5
                                        shadow-lg shadow-gray-400
                                        hover:bg-blue-400 hover:cursor-pointer
                                        hover:border-blue-500 focus-visible:border-blue-500 focus-visible:outline-none focus-visible:shadow-sm focus-visible:shadow-blue-500">
                        <span
                            onClick={()=>setIsOpen(true)}
                            ><AiOutlinePlus/></span>
                    </div>
                    {modalIsOpen && <CreateModal 
                        closeModal={()=> setIsOpen(false)}
                        modalIsOpen={modalIsOpen}
                    />}
                </div>
            </div>
        </>
    )
}

