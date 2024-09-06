import { createSlice} from '@reduxjs/toolkit'

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptButton: false
    },
    reducers: {
        toggleGpt: (state) =>{
            state.showGptButton = !state.showGptButton
        }
    }
})
export const { toggleGpt} = gptSlice.actions
export default gptSlice.reducer