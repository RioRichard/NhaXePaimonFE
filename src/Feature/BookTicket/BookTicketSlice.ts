import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormState } from './types';
import { RootState } from '../../app/store';

const initialState: FormState = {
    step1: {},
    step2: {},
    step3: {},
    finalData: {}, // this will hold the final data
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFormData: (
            state,
            action: PayloadAction<{ step: keyof FormState; formData: Record<string, string> }>
        ) => {
            const { step, formData } = action.payload;

            state[step] = { ...state[step], ...formData };

            const { step1, step2, step3 } = state;
            state.finalData = {
                to_id: step1.to_id,
                from_id: step1.from_id,
            };
        },
    },
});

export const getFinalData = (state: RootState) => state.form.finalData;

export const { updateFormData } = formSlice.actions;
const formReducer = formSlice.reducer;
export default formReducer;