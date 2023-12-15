import React from "react";

import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import Row1 from './../../Components/DashboardContent/Row1/Row1';
import Row2 from "../../Components/DashboardContent/Row2/Row2";
import Row3 from "../../Components/DashboardContent/Row3";



export default function Dashboard() {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          
        }}
      >
        <Box>
          <Typography
            color={theme.palette.info.light}
            fontSize={"35px"}
            fontWeight={"bold"}
          >
            Dashboard
          </Typography>
          <Typography fontWeight={"bold"} my={1}>Welcome To Your Dashboard</Typography>
        </Box>
        <Box>
          <Button color="primary" variant="contained">
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </>
  );
}
