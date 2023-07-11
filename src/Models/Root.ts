import { useContext, createContext } from "react";
import { types, Instance, onSnapshot } from "mobx-state-tree"
import { Todos } from "./Todos";

const RootModel = types.model({
    todos:Todos,
});

let initialState = RootModel.create({
    todos:{todoList:[]}
})

if (process.browser) {
    const data = localStorage.getItem("rootState");
    if (data) {
        const json = JSON.parse(data);
        if (RootModel.is(json)) {
        initialState = RootModel.create(json);
        }
    }
}

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
    console.log("Snapshot: ", snapshot);
    localStorage.setItem("rootState", JSON.stringify(snapshot));
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const ModelProvider = RootStoreContext.Provider;

export function useMst(){
    const store = useContext(RootStoreContext);
    if (store === null) {
        throw new Error("Store cannot be null, please add a context provider");
    }
    return store;
}