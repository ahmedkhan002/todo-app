import { Checkbox } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

export const todoLogic = createSlice({
    name: 'todo',
    initialState: {
        value: [],
        activebutton: null,
        newValue: '',
        history: [],
    },
    reducers: {
        add: (state, action) => {
            state.value.push({
                time: new Date().toLocaleString(),
                text: action.payload,
                Checkbox: false,
                selected: false,
                completed: false,
            })
        },
        activebutton: (state, action) => {
            state.activebutton = action.payload
            state.value.map((item) => {
                item.Checkbox = true
            })
        },
        toggleSelected: (state, action) => {
            const index = action.payload;

            if (state.activebutton === 'History') {
                const item = state.history[index];
                if (item) {
                    item.selected = !item.selected;
                }
            } else if (state.activebutton === 'Edit') {
                // Allow only one item to be selected at a time
                state.value.forEach((item, i) => {
                    item.selected = i === index ? !item.selected : false;
                });
            } else {
                const item = state.value[index];
                if (item) {
                    item.selected = !item.selected;
                }
            }
        },
        handleActions: (state, action) => {
            switch (state.activebutton) {
                case 'Completed':
                    state.value.map((item) => {
                        if (item.selected) {
                            item.completed = true
                        }
                    })
                    break;

                case 'Delete':
                    const deletedItems = state.value.filter((item) => item.selected)
                    state.history.push(...deletedItems)
                    state.value = state.value.filter((item) => !item.selected)
                    break;

                case 'Edit':
                    const itemToEdit = state.value.find(item => item.selected);
                    if (itemToEdit) {
                        state.newValue = itemToEdit.text;
                    }
                    break;

                case 'History':
                    state.history = state.history.filter((item) => !item.selected)


                default:
                    break;
            }


        },
        updateText: (state, action) => {
            const newText = action.payload;
            const index = state.value.findIndex(item => item.selected);

            if (index !== -1) {
                state.value[index].text = newText;
                state.value[index].selected = false;
            }

            state.newValue = '';
        }




    }
})

export const { add, activebutton, toggleSelected, handleActions, updateText } = todoLogic.actions

export default todoLogic.reducer