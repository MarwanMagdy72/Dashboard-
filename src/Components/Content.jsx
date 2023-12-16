import { Box, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";


export default function Content({ DrawerHeader }) {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Outlet />

      </Box>
    </>
  );
}
