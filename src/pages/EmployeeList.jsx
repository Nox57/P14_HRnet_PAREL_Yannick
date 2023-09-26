import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'

const columnHelper = createColumnHelper()

const columns = [
    columnHelper.accessor('firstName', { header: 'First Name' }),
    columnHelper.accessor('lastName', { header: 'Last Name' }),
    columnHelper.accessor('dateOfBirth', { header: 'Date of Birth' }),
    columnHelper.accessor('startDate', { header: 'Start Date' }),
    columnHelper.accessor('department', { header: 'Department' }),
    columnHelper.accessor('street', { header: 'Street' }),
    columnHelper.accessor('city', { header: 'City' }),
    columnHelper.accessor('state', { header: 'State' }),
    columnHelper.accessor('zipCode', { header: 'Zip Code' }),
]

export default function EmployeeTable() {
    const employees = JSON.parse(localStorage.getItem('employees')) || []
    const table = useReactTable({
        data: employees,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
