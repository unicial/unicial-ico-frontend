import type { RootState } from "../store";

// Other code such as selectors can use the imported `RootState` type

export const getCurrentStage = (state: RootState) => state.ICOinfo.currentStage;
export const getBuyPermission = (state: RootState) =>
  state.ICOinfo.buyPermission;
