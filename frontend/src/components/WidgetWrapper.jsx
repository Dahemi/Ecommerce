import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  borderRadius: "0.75rem",
  backgroundColor: theme.palette.background.alt,
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
}));

export default WidgetWrapper;
