
import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/tasks/taskSlice";
import userSlice from "./features/users/userSlice";

const store = configureStore({
    reducer: {
        tasksSlice: taskSlice,
        userSlice: userSlice,
    },
});

export default store;