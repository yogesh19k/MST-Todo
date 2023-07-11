import {
    types,
    Instance,
    SnapshotIn,
    getParent,
    destroy,
} from "mobx-state-tree"

enum status {
    "To Do",
    "In Progress",
    "Completed"
}

export const Todo = types
    .model({
        date:types.Date,
        title:types.string,
        disc: types.string,
        status:types.string,
    })
    .actions(self => ({
        editTitle(newTitle:string){
            self.title=newTitle
        },
        remove() {
            console.log(self)
            getParent<typeof Todos>(self, 2).remove(self);
        }
    }))

export const Todos = types
    .model({
        todoList:types.optional(types.array(Todo),[])
    })
    .actions(self => ({
        addTodo(
            newTodo:SnapshotIn<typeof Todo> | Instance<typeof Todo>
        ){
            self.todoList.push(newTodo)
        },
        remove(item: SnapshotIn<typeof Todo>) {
            destroy(item);
        }
    }))
