import { useState } from "react";
import { Box, Typography, List, ListItem, ListItemButton, Paper } from "@mui/material";

import EvenOrOdd from "./components/EvenOrOdd";
import Factorial from "./components/Factorial";
import PrimeComposite from "./components/PrimeComposite";
import Palindrome from "./components/Palindrome";
import MultiplicationTable from "./components/MultiplicationTable";

const Home = () => {
  // Mapping of display names to components
  const components = {
    "Even or Odd": <EvenOrOdd />,
    "Factorial": <Factorial />,
    "Prime or Composite": <PrimeComposite />,
    "Palindrome": <Palindrome />,
    "Multiplication Table": <MultiplicationTable />
  };

  const [componentName, setComponentName] = useState(null);

  const handleListItemClick = (event) => {
    const selectedComponent = event.target.innerText;
    setComponentName(selectedComponent);
  };

  const renderComponent = () => {
    return components[componentName] || (
      <Typography variant="h6" color="textSecondary">
        Please select a program from the list.
      </Typography>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
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
            {Object.keys(components).map((q) => (
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
