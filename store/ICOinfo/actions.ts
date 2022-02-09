import { createAsyncThunk } from "@reduxjs/toolkit";

const setCurrentStage = createAsyncThunk(
  "ICOinfo/currentStage",
  async (stage: any) => {
    const payload = {
      currentStage: stage,
    };
    return payload;
  }
);

const setBuyPermission = createAsyncThunk(
  "ICOinfo/buyPermission",
  async (permission: any) => {
    const payload = {
      buyPermission: permission,
    };
    return payload;
  }
);

export { setCurrentStage, setBuyPermission };
