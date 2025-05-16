import { useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, Paper } from "@mui/material";

import EvenOrOdd from "./components/EvenorOdd";
import Factorial from "./components/Factorial";
import PrimeComposite from "./components/PrimeComposite";
import Palindrome from "./components/Palindrome";
import MultiplicationTable from "./components/MultiplicationTable";

const Home = () => {
  const questions = ["Even or Odd", "Factorial", "Prime or Composite", "Palindrome", "Multiplication Table"];
  const [componentName, setComponentName] = useState(null);

  const handleListItemClick = (event) => {
    const selectedComponent = event.target.innerText;
    setComponentName(selectedComponent);
  };

  const renderComponent = () => {
    switch (componentName) {
      case "Even or Odd":
        return <EvenOrOdd />;
      case "Factorial":
        return <Factorial />;
      case "Prime or Composite":
        return <PrimeComposite />;
      case "Palindrome":
        return <Palindrome />;
      case "Multiplication Table":
        return <MultiplicationTable />;
      default:
        return (
          <Typography variant="h6" color="textSecondary">
            Please select a program from the list.
          </Typography>
        );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",  // center horizontally
        alignItems: "center",      // center vertically
        minHeight: "100vh",        // full viewport height
        bgcolor: "#fafafa",
        padding: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          width: "100%",
          padding: 3,
          border: "2px solid #3f51b5",
          borderRadius: 3,
          bgcolor: "#f5f5f5",
          boxShadow: 3,
          display: "flex",
          gap: 3,
        }}
      >
        {/* Sidebar */}
        <Paper sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Select Program
          </Typography>
          <List>
            {questions.map((q) => (
              <ListItem key={q} disablePadding>
                <ListItemButton onClick={handleListItemClick}>{q}</ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Main content */}
        <Box
          sx={{
            flexGrow: 1,
            padding: 2,
            bgcolor: "#e3f2fd",
            borderRadius: 2,
            minHeight: 400,
          }}
        >
          {renderComponent()}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
