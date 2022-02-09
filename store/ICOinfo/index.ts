/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCurrentStage, setBuyPermission } from "./actions";
import type { ICOstate } from "./types";

const PREFIX = "ICOinfo";

const initialState: ICOstate = {
  currentStage: "",
  buyPermission: false,
};

const handleCurrentStage = (state: ICOstate, res: any) => {
  state.currentStage = res.currentStage ? res.currentStage : "";
};

const handleBuyPermission = (state: ICOstate, res: any) => {
  state.buyPermission = res.buyPermission ? res.buyPermission : "";
};

export const ICOinfoReducer = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      setCurrentStage.fulfilled.type,
      (state: ICOstate, action: PayloadAction<any>) => {
        handleCurrentStage(state, action.payload);
      }
    );
    builder.addCase(
      setBuyPermission.fulfilled.type,
      (state: ICOstate, action: PayloadAction<any>) => {
        handleBuyPermission(state, action.payload);
      }
    );
  },
});

export { setCurrentStage, setBuyPermission };

export default ICOinfoReducer.reducer;
