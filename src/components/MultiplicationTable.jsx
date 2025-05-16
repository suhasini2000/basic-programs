import { useState } from "react";
import { TextField, Button, Typography, Box, List, ListItem } from "@mui/material";

const MultiplicationTable = () => {
  const [num, setNum] = useState("");
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const n = parseInt(num);
    if (isNaN(n)) return;
    let result = [];
    for (let i = 1; i <= 10; i++) {
      result.push(`${n} x ${i} = ${n * i}`);
    }
    setTable(result);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Multiplication Table</Typography>
      <TextField
        label="Enter a number"
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        sx={{ mb: 2 }}
      />
      <br />
      <Button variant="contained" onClick={generateTable}>Generate</Button>
      <List>
        {table.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MultiplicationTable;
