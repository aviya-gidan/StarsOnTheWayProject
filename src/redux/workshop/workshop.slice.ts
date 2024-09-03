import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Workshop } from '../../conect/type'

type StateType = {
    workshops: Workshop[]
}

const initialState: StateType = {
    workshops:[]
}
const WorkshopSlice = createSlice({
    name: 'workshop',
    initialState,
    reducers:{
        addWorkshopSlice: (state,action:PayloadAction<Workshop>) => {
            state.workshops.push(action.payload)
        },
        addParticipant: (state, action:PayloadAction<Workshop>) => {
            const workshop = state.workshops.find(w => w.id === action.payload.id);
            if (workshop) {
                workshop.numOfKids++;
            }

        },
        removeParticipant: (state, action: PayloadAction<{ workshopId: number; }>) => {
            const workshop = state.workshops.find(w => w.id === action.payload.workshopId);
            if (workshop && workshop.numOfKids > 0) {
                workshop.numOfKids--;
            }
        },
        setWorkshopSlice: (state, action: PayloadAction<Workshop[]>) => {
            state.workshops = action.payload;
        },
        updateWorkshopSlice: (state, action: PayloadAction<Workshop>) => {
            const updatedWorkshop = action.payload;
            const index = state.workshops.findIndex(workshop => workshop.id === updatedWorkshop.id);
            if (index !== -1) {
                state.workshops[index] = updatedWorkshop;
            }
        },
        deleteWorkshopSlice: (state, action: PayloadAction<number>) => {
            state.workshops = state.workshops.filter(c => c.id != action.payload);
        }
    }
})
export const { addWorkshopSlice, setWorkshopSlice , updateWorkshopSlice, deleteWorkshopSlice} = WorkshopSlice.actions
export default WorkshopSlice.reducer