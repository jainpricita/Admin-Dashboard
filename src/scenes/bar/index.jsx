import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

import React from "react";

export default function Bar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Bar" subtitle="Welcome to your dashboard" />
    </Box>
  );
}
