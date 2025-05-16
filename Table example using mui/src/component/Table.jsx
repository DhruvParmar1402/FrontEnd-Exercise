import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { fetch } from '../util/fetch'; 

export default function DataGridDemo() {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dataArr = await fetch();
      const dataWithId = dataArr.map((item, index) => ({
        ...item,
        id: index, 
      }));
      setRows(dataWithId);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (rows.length > 0) {
      const columnDefs = Object.keys(rows[0]).map((key) => ({
        field: key,
        headerName: key,
        width: 100,
        editable: true,
      }));
      setColumns(columnDefs);
    }
  }, [rows]);

  return (
    <>
      <Box sx={{ height: "100%", width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5,10,15]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
