import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "../../Components/TopBar";
import SideBar from "../../Components/SideBar";
import {  ThemeProvider, createTheme } from "@mui/material";
import Content from "../../Components/Content";
import { getDesignTokens } from "../../Themes/dark";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

export default function Home() {
  const [mode, setMode] = React.useState(
    Boolean(localStorage.getItem("currentMode"))
      ? localStorage.getItem("currentMode")
      : "light"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>

    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <TopBar open={open} setOpen={setOpen} setMode={setMode} />

      <SideBar open={open} setOpen={setOpen} DrawerHeader={DrawerHeader} />

      <Content DrawerHeader={DrawerHeader} />
    </Box>
    </ThemeProvider>
  );
}
