import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { teamData } from "./teamData";
import { Box, Typography, useTheme } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export default function Team() {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      align: "center",
      flex: 1,
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "8px",

              borderRadius: "4px",
              width: "100px",
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "center",
              alignItems: "center",

              backgroundColor:
                access === "Admin"
                  ? theme.palette.info.dark
                  : access === "User"
                  ? theme.palette.success.dark
                  : access === "Manager"
                  ? theme.palette.error.main
                  : theme.palette.warning.dark,
            }}
          >
            {access === "User" ? (
              <VerifiedUserOutlinedIcon
                sx={{
                  fontSize: "16px",
                  mr: "2px",
                  color: "white",
                }}
              />
            ) : access === "Admin" ? (
              <AdminPanelSettingsOutlinedIcon
                sx={{
                  fontSize: "16px",
                  mr: "2px",
                  color: "white",
                }}
              />
            ) : access === "Manager" ? (
              <ManageAccountsIcon
                sx={{
                  fontSize: "16px",
                  mr: "2px",
                  color: "white",
                }}
              />
            ) : (
              ""
            )}

            <Typography variant="body" color={"white"}>
              {" "}
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

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
          Team
        </Typography>
        <Typography fontWeight={"bold"}>Managing the Team Members</Typography>
      </Box>
      <Box sx={{ height: "auto", width: "auto", m: "auto" }}>
        <DataGrid rows={teamData} columns={columns} />
      </Box>
    </>
  );
}
