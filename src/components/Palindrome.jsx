import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";

const Palindrome = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const checkPalindrome = () => {
    const str = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = str.split("").reverse().join("");
    setResult(str === reversed ? "Palindrome" : "Not a Palindrome");
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>Palindrome</Typography>
      <TextField
        label="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ mb: 2 }}
      />
      <br />
<Button
  variant="contained"
  onClick={checkPalindrome}
  sx={{ backgroundColor: "#ff9800", '&:hover': { backgroundColor: "#f57c00" } }}
>
  Check
</Button>

<Typography sx={{ mt: 2, color: result.includes("Not") ? "red" : "green" }}>
  Result: {result}
</Typography>
    </Box>
  );
};

export default Palindrome;
