import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ref', width: 150 },
  {
    field: 'numero',
    headerName: 'Numéro',
    width: 150,
    editable: false,
  },
  {
    field: 'lastpiece',
    headerName: 'Dernière pièce',
    width: 150,
    editable: false,
  },
  {
    field: 'datepiece',
    headerName: 'D. Pièce',
    width: 150,
    editable: false,
  },
  {
    field: 'etat',
    headerName: 'Etat',
    editable: false,
    width: 160
  },
];



export const DataTable= ({data})=>
{
  
  return (
    <Box sx={ { height: 650, width: '100%' } }>
      <DataGrid
        rows={ data }
        columns={ columns }
        disableColumnSelector	
        pageSize={ 10 }
        rowsPerPageOptions={ [ 10 ] }
        checkboxSelection={ false }
        disableExtendRowFullWidth={ false }
        disableSelectionOnClick={ false }
        isRowSelectable={ true }
        onRowClick={()=>{}}
      />
    </Box>
  );
}
