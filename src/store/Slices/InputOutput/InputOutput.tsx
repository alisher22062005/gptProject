import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface inputOutput {
  input: string;
  output: string;
}

interface State {
  requests: inputOutput[];
}

const initialState: State = {
  requests: [],
};

const inputOutput = createSlice({
  name: "inputOutput",
  initialState: initialState,
  reducers: {
    sendRequest: (state, action: PayloadAction<inputOutput>) => {
      state.requests.push(action.payload);
    },
  },
});

export const { sendRequest } = inputOutput.actions;
export default inputOutput.reducer;
