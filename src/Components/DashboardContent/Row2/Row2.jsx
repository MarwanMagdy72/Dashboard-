import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import LineChart from "../../../Pages/LineChart/LineChart";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import { recentTransactions } from "./RecentTransactionsData";

export default function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={2} flexWrap="wrap">
      <Paper
        sx={{
          maxWidth: 900,
          minWidth: 300,
          flexGrow: 1,
          mx:'auto',
          width: '100%',
        }}
      >
        <Stack
          direction={"row"}
          p={"20px  20px  0px 20px"}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Stack>
            <Typography
              color={theme.palette.primary.dark}
              sx={{ fontWeight: "bold" }}
              variant="h5"
            >
              Revenue Generated
            </Typography>
            <Typography>$59,342.32</Typography>
          </Stack>
          <IconButton sx={{ width: "50px", height: "50px" }}>
            <GetAppOutlinedIcon />
          </IconButton>
        </Stack>
        <LineChart inDashboard={true} />
      </Paper>

      <Box
        sx={{
          maxHeight: 420,
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Paper >
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        {recentTransactions.map((transaction) => {
          return (
            <Paper
              sx={{
                my: "10px",
                px: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Stack>
                <Typography variant="h6"> {transaction.registerId} </Typography>
                <Typography>{transaction.name} </Typography>
              </Stack>

              <Box fontWeight="bold">{transaction.date}</Box>

              <Box
                sx={{
                  backgroundColor: "red",
                  p: 1,
                  borderRadius: "5px",
                  width: "80px",
                  textAlign: "center",
                  color: "white",
                }}
              >
                {transaction.money} $
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}
