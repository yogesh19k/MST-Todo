import { Instance } from "mobx-state-tree"
import { Todo } from "./Todos"

export interface Task{
    date:Date,
    title:string,
    disc: string,
    status:any
}

export interface ModalEditInterface{
    modalIsOpen:boolean,
    closeModal(arg0: Task | undefined ):void,
    editTask:Task,
}

export interface ModalCreateInterface{
    modalIsOpen:boolean,
    closeModal:()=>void,
}

export type TodoType = Instance<typeof Todo>