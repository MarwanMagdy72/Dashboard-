import EmailIcon from "@mui/icons-material/Email";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Chart1 from "./Chart1/Chart1";
import Chart2 from "./Chart2/Chart2";
import Chart3 from "./Chart3/Chart3";
import Chart4 from "./Chart4/Chart4";

export const data = [
  {
    paper1: {
      icon: <EmailIcon />,
      value: "12,361",
      subTitle: "Emails Sent",
      chart: <Chart1 />,
      chartValue: "+14%",
    },
    paper2: {
      icon: <TrendingUpIcon />,
      value: "431,225",
      subTitle: "Sales obtained",
      chart: <Chart2 />,
      chartValue: "+21%",
    },
    paper3: {
      icon: <PersonAddIcon />,
      value: "32,441",
      subTitle: "New Clients",
      chart: <Chart3 />,
      chartValue: "+5%",
    },
    paper4: {
      icon: <TrafficIcon />,
      value: "1,325,134",
      subTitle: "Traffic Received",
      chart: <Chart4 />,
      chartValue: "+43%",
    },
  },
];
