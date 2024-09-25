import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";



const TypeSearch = () => {

  return (
   
     <form>
      <TextField
        id="search-bar"
        className="text"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
  </form>
 
  );
};

export default TypeSearch;


