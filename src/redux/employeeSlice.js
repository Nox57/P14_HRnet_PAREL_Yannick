import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employees: JSON.parse(localStorage.getItem('employees')) || [],
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload)
            localStorage.setItem('employees', JSON.stringify(state.employees))
        },
    },
})

export const { addEmployee } = employeeSlice.actions

export default employeeSlice.reducer
