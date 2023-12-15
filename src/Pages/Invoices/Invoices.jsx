import React from "react";
import { columns, invoicesData } from "./invoicesData";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function Invoices() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          mb: "20px",
        }}
      >
        <Typography
          color={theme.palette.info.light}
          fontSize={"35px"}
          fontWeight={"bold"}
        >
          Invoices
        </Typography>
        <Typography fontWeight={"bold"}>List of Invoice Balances </Typography>
      </Box>
      <Box sx={{ height: "auto", width: "auto", m: "auto" }}>
        <DataGrid
          checkboxSelection
          rows={invoicesData}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </>
  );
}
