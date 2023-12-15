import React from "react";
import {
  Box,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { data } from "./row1Data";

export default function Row1() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      {data.map((papers, index) => (
        <Stack
          key={index}
          sx={{
            flexWrap: "wrap",

            my: "10px",
          }}
          direction={"row"}
        >
          {Object.values(papers).map((paper, paperIndex) => (
            <Paper
              key={paperIndex}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: isLargeScreen ? "340px" : "300px",
                height: "130px",
                borderRadius: "4px",

                my: "5px",
                padding: "10px",
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                  }}
                >
                  <Typography color={theme.palette.primary.dark}>
                    {paper.icon}
                  </Typography>
                  <Typography my={1.5}>{paper.value}</Typography>
                  <Typography>{paper.subTitle}</Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography> {paper.chart}</Typography>
                  <Typography>{paper.chartValue}</Typography>
                </Box>
              </Box>
            </Paper>
          ))}
        </Stack>
      ))}
    </Box>
  );
}
