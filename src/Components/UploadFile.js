import { TextField, Button} from "@mui/material";
import { UploadFile } from "@mui/icons-material";
import { Typography } from "@mui/material";




const UploadFileComp = () => {

    return(
        <div style={{minHeight:"700px",minWidth:"500px", padding:"30px"}}>
          <Typography variant="h5"
            noWrap > 
            Uplaod a csv to export the data.
        </Typography>
        <form sx={{textAlign: "center", display:"flex", justifyContent:"space-between"}}>
       
            <TextField type="file" /> &nbsp;&nbsp;&nbsp;
            <Button variant="contained" color="primary" component="span" startIcon={<UploadFile />}>
               Upload
            </Button>
            <br/><br/>
            <Button variant="contained" color="primary">
             Click here to Export
             </Button>
        </form>
        
        </div>
    )

}

export default UploadFileComp;