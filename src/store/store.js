import { configureStore } from "@reduxjs/toolkit"
import reducer from "./windowEstimatorSlice";

export const store = configureStore({reducer})

