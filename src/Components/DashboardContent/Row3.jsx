import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import RedialChart from "../../Pages/RedialChart/RedialChart";
import BarChart from "../../Pages/BarChart/BarChart";
import Geography from "./../../Pages/Geography/Geography";

export default function Row3() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={2} my={1.5} flexWrap={"wrap"}>
      <Paper
        sx={{
          maxWidth: 455,

          minWidth: 300,
          flex: 1,
          p: 2.5,
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h5"
          fontWeight={"bold"}
        >
          Campaign
        </Typography>
        <RedialChart inDashboard />
        <Typography variant="h6">$48,352 revenue generated</Typography>
        <Typography variant="subtitle1">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>
      <Paper
        sx={{
          maxWidth: 455,

          minWidth: 300,
          flex: 1,
          p: 2.5,
        }}
      >
        <Typography
          color={theme.palette.secondary.main}
          variant="h5"
          fontWeight={"bold"}
        >
          Sales Quantity
        </Typography>
        <BarChart inDashboard />
      </Paper>
      <Paper
        sx={{
          maxWidth: 455,

          minWidth: 300,
          flex: 1,
        }}
      >
        <Geography inDashboard />
      </Paper>
    </Stack>
  );
}
