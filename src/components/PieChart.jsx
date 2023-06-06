import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

import React from "react";

export default function PieChart({ isDashboard = false }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const chartTheme = {
    tooltip: {
      container: {
        background: colors.primary[400],
      },
    },
  };

  return (
    <ResponsivePie
      data={data}
      theme={chartTheme}
      margin={
        isDashboard
          ? { top: 10, right: 5, bottom: 10, left: 5 }
          : { top: 40, right: 80, bottom: 80, left: 80 }
      }
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLinkLabels={isDashboard ? false : true}
      legends={
        isDashboard
          ? []
          : [
              {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
    />
  );
}
