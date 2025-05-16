import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const PrimeComposite = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkPrimeComposite = () => {
    const n = parseInt(num);
    if (isNaN(n) || n <= 1) {
      setResult("Enter a number greater than 1");
      return;
    }

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        setResult("Composite");
        return;
      }
    }
    setResult("Prime");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Prime or Composite</Typography>
      <TextField
        label="Enter a number"
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
        sx={{ mb: 2 }}
      />
      <br />
      <Button
  variant="contained"
  onClick={checkPrimeComposite}
  sx={{ backgroundColor: "#2196f3", '&:hover': { backgroundColor: "#1976d2" } }}
>
  Check
</Button>

<Typography sx={{ mt: 2, color: result === "Prime" ? "green" : "red" }}>
  Result: {result}
</Typography>

    </Box>
  );
};

export default PrimeComposite;
