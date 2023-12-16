import {
  Box,
  Grid,
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
    <Grid mt={1} container spacing={2}>
      <Grid item xs={12} lg={6}>
        <Paper
          sx={{
            maxWidth: 900,
            minWidth: 300,
            flexGrow: 1,
            mx: "auto",
            width: "100%",
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
      </Grid>

      <Grid item xs={12} lg={6}>
        <Paper
          sx={{
            maxHeight: 420,
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          <Paper
            sx={{
              position: "sticky",
              top: 0,
              backgroundColor: theme.palette.background.paper,
              zIndex: 1,
              p: 1.2,
              borderBottom: "1px solid",
            }}
          >
            <Typography
              color={theme.palette.secondary.main}
              fontWeight={"bold"}
              variant="h6"
            >
              Recent Transactions
            </Typography>
          </Paper>
          {recentTransactions.map((transaction, index) => (
            <Paper
              sx={{
                my: "10px",
                px: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={index}
            >
              <Stack>
                <Typography variant="h6"> {transaction.registerId} </Typography>
                <Typography>{transaction.name} </Typography>
              </Stack>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box fontWeight="bold">{transaction.date}</Box>
              </Box>

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
          ))}
        </Paper>
      </Grid>
    </Grid>
  );
}
