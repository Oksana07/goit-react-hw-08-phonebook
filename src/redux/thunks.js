import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_USER_URL=`https://connections-api.herokuapp.com`
const userRegister = '/user/signup';
const userLogin = '/user/login';
const userLogout = '/user/logout';
const userCurrent = '/user/current';

export const registerThunk = createAsyncThunk("user/register", async (user, {rejectWithValue}) => {
    try {
        const response = await fetch(BASE_USER_URL+userRegister, {
            method: "POST",
            body: JSON.stringify(user),});
            console.log("response", response);
    } catch (err) {}
    }
);