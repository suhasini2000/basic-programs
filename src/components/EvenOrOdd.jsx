import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const EvenOrOdd = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const check = () => {
    setResult(num % 2 === 0 ? "Even" : "Odd");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Even or Odd</Typography>
      <TextField
        label="Enter a number"
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        sx={{ mb: 2 }}
      />
      <br />
      <Button variant="contained" onClick={check}>Check</Button>
      <Typography sx={{ mt: 2 }}>{result}</Typography>
    </Box>
  );
};

export default EvenOrOdd;
