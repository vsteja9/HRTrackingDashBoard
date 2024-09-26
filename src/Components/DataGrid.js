import React , {useState} from 'react';
import {  GridToolbar} from '@mui/x-data-grid-pro';
import { Box, Button, Dialog } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import TypeSearch from './Search';
import AddFieldForm from './AddFieldForm';
import UploadFileComp from './UploadFile';
const columns = [
  { field: 'CandidateName', headerName: 'CandidateName', width: 150 },
  { field: 'Designation', headerName: 'Designation', width: 150 },
  { field: 'SkillSet', headerName: 'SkillSet', width: 120 },
  { field: 'Experience', headerName: 'Experience', width: 100 },
  { field: 'CurrentCompany', headerName: 'CurrentCompany', width: 180 },
  { field: 'CTC', headerName: 'CTC', width: 130 },
  { field: 'Expectations', headerName: 'Expectations', width: 180 },
  { field: 'NoticePeriod', headerName: 'NoticePeriod', width: 150 },
  { field: 'Offered', headerName: 'Offered', width: 150 },
  { field: 'Status', headerName: 'Status', width: 150 },
  { field: 'Comments', headerName: 'Comments', width: 150 },
];

const rows = [
  { id: 1, CandidateName: 'John Doe', Designation: 'Software Developer', SkillSet: 'React,nest', Experience: '5 yrs', CurrentCompany: 'NCR', Expectations: '20 LPA', CTC: '14 LPA', NoticePeriod: '2 months',Offered:'Yes',Status:'Selected',Comments:'No Remarks' },
  { id: 2, CandidateName: 'Jane Smith', Designation: 'Software Tester', SkillSet: 'Manual and automation ', Experience: '4 yrs', CurrentCompany: 'Amazon', Expectations: '15 LPA', CTC: '10 LPA', NoticePeriod: '1 month',Offered:'Yes',Status:'Selected',Comments:'No Remarks' },
  { id: 3, CandidateName: 'jack ', Designation: 'Software Tester', SkillSet: 'Manual and automation ', Experience: '4 yrs', CurrentCompany: 'Amazon', Expectations: '15 LPA', CTC: '10 LPA', NoticePeriod: '1 month',Offered:'Yes',Status:'Selected',Comments:'No Remarks' }
  ,{ id: 4, CandidateName: 'Tony ', Designation: 'Software Tester', SkillSet: 'Manual and automation ', Experience: '4 yrs', CurrentCompany: 'Amazon', Expectations: '15 LPA', CTC: '10 LPA', NoticePeriod: '1 month',Offered:'Yes',Status:'Selected',Comments:'No Remarks' }
  ,{ id: 5, CandidateName: 'Robert smith', Designation: 'Software Tester', SkillSet: 'Manual and automation ', Experience: '4 yrs', CurrentCompany: 'Amazon', Expectations: '15 LPA', CTC: '10 LPA', NoticePeriod: '1 month',Offered:'Yes',Status:'Selected',Comments:'No Remarks' },
  { id: 6, CandidateName: 'Alex ', Designation: 'Software Tester', SkillSet: 'Manual and automation ', Experience: '4 yrs', CurrentCompany: 'Amazon', Expectations: '15 LPA', CTC: '10 LPA', NoticePeriod: '1 month',Offered:'Yes',Status:'Selected',Comments:'No Remarks' }
  
];

export default function EmployeeDataGrid() {
  const [csvState,setCsv] = useState(false);
  const [formState,setFormState] = useState(false);

  function handleCsvClick() {
      setCsv(true)
  }

  function handleFormClick() {
    setFormState(true)
}
  return (
    <Box sx={{ height: 400, width: '100%', }}>
        <Box display={'flex'} style={{flexDirection:"row-reverse"}}>
           
        <Box textAlign={'right'} alignContent={'flex-end'}>
            <Button variant='outlined' style={{ margin: 7, boxSizing: "content-box" }} onClick={handleCsvClick}>Upload with .CSV</Button>
            <Button variant='outlined' style={{ margin: 7, boxSizing: "content-box" }} onClick={handleFormClick}xx>Add Form</Button>
        </Box>

        <Box>
             <TypeSearch></TypeSearch>
            </Box>

        </Box>

        <Dialog onClose={() => setCsv(false)} open={csvState} fullWidth disableEscapeKeyDown>
          <UploadFileComp label="Export Data"></UploadFileComp>
        </Dialog>

        <Dialog onClose={() => setFormState(false)} open={formState} fullWidth disableEscapeKeyDown>
          <AddFieldForm label="Export Data"/>
        </Dialog>
       
        
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
            backgroundColor: 'background.paper',
            // using minHeight to stabilize loading skeleton
            minHeight: 590,
            height: 590,
            width: '100%',
            border: 1,
            borderColor: '#B8B7B7',
            borderRadius: '8px',}}
        showQuickFilter
        componentsProps={{
            toolbar: {
                showQuickFilter: true,
                   quickFilterProps: { debounceMs: 500 },
             },
          }}
        components={{ Toolbar: GridToolbar }}
        disableDensitySelector
        disableColumnFilter
      />
    </Box>
  );
}


