import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { data } from "./row1Data";

export default function Row1() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box>
      {data.map((papers, index) => (
        <Grid
          key={index}
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          my={1}
        >
          {Object.values(papers).map((paper, paperIndex) => (
            <Grid
              key={paperIndex}
              item
              xs={12}
              md={isLargeScreen ? 6 : 12}
              lg={isLargeScreen ? 3 : 12}
            >
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "130px",
                  borderRadius: "4px",
                  
                  padding: "10px",
                  
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
            </Grid>
          ))}
        </Grid>
      ))}
    </Box>
  );
}
