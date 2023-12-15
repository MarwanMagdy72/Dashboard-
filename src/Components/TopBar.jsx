import React from "react";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  IconButton,
  InputBase,
  Stack,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function TopBar({ open, setOpen, setMode }) {
  const theme = useTheme();

  const drawerWidth = 240;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box flexGrow={1} />
          <Stack direction={"row"}>
            {theme.palette.mode === "dark" ? (
              <IconButton
                color={"inherit"}
                onClick={() => {
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                  localStorage.setItem(
                    "currentMode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                }}
              >
                <LightModeOutlinedIcon />
              </IconButton>
            ) : (
              <IconButton
                color={"inherit"}
                onClick={() => {
                  setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                  );
                  localStorage.setItem(
                    "currentMode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                }}
              >
                <DarkModeOutlinedIcon />
              </IconButton>
            )}

            <IconButton color={"inherit"}>
              <NotificationsNoneOutlinedIcon />
            </IconButton>

            <IconButton color={"inherit"}>
              <SettingsOutlinedIcon />
            </IconButton>

            <IconButton color={"inherit"}>
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
