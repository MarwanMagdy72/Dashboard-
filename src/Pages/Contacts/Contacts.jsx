import React from 'react'
import { columns, contactsData } from './contactsData'
import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'



export default function Contacts() {
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
        Contacts
      </Typography>
      <Typography fontWeight={"bold"}>List of Contacts for Future Reference</Typography>
    </Box>
    <Box sx={{ height: "auto", width: "auto", m: "auto" }}>
      <DataGrid rows={contactsData} columns={columns} slots={{ toolbar: GridToolbar }} />
    </Box>
  </>
  )
}
