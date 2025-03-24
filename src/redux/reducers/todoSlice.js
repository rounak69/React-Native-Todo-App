import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        data: [],
    },
    reducers: {
        addTodo: (state, action) => {
            const todoData = {
                id: state.data.length + 1, // Removed optional chaining
                title: action.payload.title,
                desc: action.payload.desc,
            };
            state.data = [todoData, ...state.data]; // Removed optional chaining
        },
        deleteTodo: (state, action) => {
            state.data = state.data.filter((i) => i.id !== action.payload.id); // Removed optional chaining
        },
        updateTodo: (state, action) => {
            const { id, title, desc } = action.payload;
            const index = state.data.findIndex((i) => i.id === id); // Removed optional chaining
            if (index !== -1) {
                state.data[index] = { ...state.data[index], title, desc };
            }
        },
    },
});


export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer
