

import { Select, Typography , MenuItem,InputLabel,FormControl} from "@mui/material";
import {
  TextField,
  Button,
} from "@mui/material";

export default function AddFieldForm({title}) {
  return (
    <div style={{minHeight:"700px",minWidth:"500px", padding:"30px"}}>
    <Typography variant="h5"
            noWrap sx={{margin:"20px 0"}} > 
      {title ||'Fill the Candidate Details'}
    </Typography>
    <form sx={{textAlign: "center"}}>
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Candidate Name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Designation"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Skillset"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Experience"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Reason for the change"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Offers if any"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Current Location"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Expected CTC"
          variant="outlined"
        />
        <br/>
        <br />
        <FormControl>
            <InputLabel id="demo-simple-select-label">Notice Period</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="Np"
            label="Notice Period"
            variant="outlined"
            style={{width:500}}
        >
            <MenuItem value={1}>less than 1 Month</MenuItem>
            <MenuItem value={2}>2 Months</MenuItem>
            <MenuItem value={3}>More than 2 Months</MenuItem>
            </Select>
        </FormControl>
        <br />
        <br/>

        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Additional comments"
          variant="outlined"
        />
         <br />

         <br/>              


        <Button variant="contained" color="primary">
          save
        </Button>
    </form>
    </div>
  );
}
