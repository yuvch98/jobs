import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectProps {
  sortBy: "Date" | "Company";
  setSortBy: React.Dispatch<React.SetStateAction<"Date" | "Company">>;
}

export default function BasicSelect({ sortBy, setSortBy }: SelectProps) {
  const handleChange = (event: SelectChangeEvent<"Date" | "Company">) => {
    setSortBy(event.target.value as "Date" | "Company");
  };

  return (
    <Box sx={{ minWidth: 120, marginBottom: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          id="sort-select"
          value={sortBy}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value="Date">Date</MenuItem>
          <MenuItem value="Company">Company</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
