const { createSlice, nanoid } = require("@reduxjs/toolkit")

const initialState={
    todos:[]
}

const Slice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodos:(state,action)=>{
           console.log(action)
            const data={
                id:nanoid(),
                name:action.payload

            }
            console.log('data',data);
            state.todos.push(data)
            

        }
    }

})
export const {addTodos} =Slice.actions;
export default Slice.reducer