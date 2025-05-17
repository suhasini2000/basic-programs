import { useState } from "react";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";

const EvenOrOdd = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkEvenOrOdd = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("Please enter a valid number.");
    } else {
      setResult(num % 2 === 0 ? `${num} is Even` : `${num} is Odd`);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 4 }}>
      <Typography variant="h5" gutterBottom>
        Even or Odd Checker
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Enter a number"
          variant="outlined"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={checkEvenOrOdd}>
          Check
        </Button>
        {result && (
          <Typography variant="subtitle1" color="secondary">
            {result}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default EvenOrOdd;
