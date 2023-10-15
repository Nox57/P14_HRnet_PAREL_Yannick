import { useMemo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { MaterialReactTable } from 'material-react-table'
import './EmployeeList.css'

export default function EmployeeTable() {
    useEffect(() => {
        document.title = 'HRnet - Employee List'
    }, [])

    const employees = useSelector((state) => state.employee.employees)

    const columns = useMemo(
        () => [
            {
                accessorKey: 'firstName',
                header: 'First Name',
                size: 'auto',
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
                size: 'auto',
            },
            {
                accessorKey: 'dateOfBirth',
                header: 'Date of Birth',
                size: 'auto',
            },
            {
                accessorKey: 'startDate',
                header: 'Start Date',
                size: 'auto',
            },
            {
                accessorKey: 'department',
                header: 'Department',
                size: 'auto',
            },
            {
                accessorKey: 'street',
                header: 'Street',
                size: 150,
            },
            {
                accessorKey: 'city',
                header: 'City',
                size: 150,
            },
            {
                accessorKey: 'state',
                header: 'State',
                size: 'auto',
            },
            {
                accessorKey: 'zipCode',
                header: 'Zip Code',
                size: 150,
            },
        ],
        []
    )

    return (
        <div className="table-container">
            <MaterialReactTable
                columns={columns}
                data={employees}
                enableFullScreenToggle={false}
                enableDensityToggle={false}
                initialState={{ density: 'compact' }}
                enableHiding={false}
                enableColumnFilters={false}
                muiTablePaginationProps={{
                    rowsPerPageOptions: [10, 25, 50, 100],
                    showFirstButton: false,
                    showLastButton: false,
                    sx: {
                        color: '#6e8512',
                    },
                }}
                muiTablePaperProps={{
                    elevation: 0,
                }}
                muiTableHeadCellProps={{
                    sx: {
                        fontSize: '16px',
                        color: '#6e8512',
                    },
                }}
            />
        </div>
    )
}
