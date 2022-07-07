import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { UserColumns, UserRows } from './DatatableSource';


const DataTable = () => {

    const activeColumn = [
        {field: "action", headerName: "Action", width: 200,
    renderCell: () => {
return (
    <div className='cell__action' >
        <div className="view__button">View</div>
        <div className="delete__button">Delete</div>
    </div>
)
    }
}
    ]
    return (
        <div className='data__table' >
            <DataGrid
                rows={UserRows}
                columns={UserColumns.concat(activeColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTable;