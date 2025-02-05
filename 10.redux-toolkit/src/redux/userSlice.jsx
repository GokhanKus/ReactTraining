import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    loading: false
}

export const getAllUsers = createAsyncThunk("users", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: { //reducerslar http istegi olmazsa kullanılır

    },
    extraReducers: (builder) => { //http istegi olacaksa extraReducers..
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            //getAllUsers.fulfilled islem basarili olursa demek
            //state.users = initialState icindeki users'dır 
            //action.payload = getAllUsers'taki response.datadır
            //yani yukaridaki users: [], icerisine, attigimiz istek dogrultusunda bize donen data(response.data)'yi -yani user listi- aktariyoruz
            //bu users[]'lara da userselector ile userlist icerinde erisecegiz
        })
    }
})

export const { } = userSlice.actions//{} icine reducers icindeki metotlar konulur

export default userSlice.reducer