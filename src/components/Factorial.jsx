import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const Factorial = () => {
  const [num, setNum] = useState("");
  const [result, setResult] = useState(null);

  const calculateFactorial = () => {
    let n = parseInt(num);
    if (isNaN(n) || n < 0) {
      setResult("Enter a non-negative number");
      return;
    }
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    setResult(fact);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Factorial</Typography>
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
  onClick={calculateFactorial}
  sx={{ backgroundColor: "#4caf50", '&:hover': { backgroundColor: "#388e3c" } }}
>
  Calculate
</Button>

<Typography sx={{ mt: 2, color: "blue" }}>
  Result: {result}
</Typography>
    </Box>
  );
};

export default Factorial;
