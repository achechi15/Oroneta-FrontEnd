

import React from "react";
import { Card, Icon } from "@mui/material";
import welcome from "assets/images/welcome-profile.png";
import VuiTypography from "components/VuiTypography/index";
import VuiBox from "components/VuiBox/index";

const Welcome = () => {
  return (
    <Card
      sx={({ breakpoints }) => ({
        background: `url(${welcome})`,
        backgroundSize: "cover",
        borderRadius: "20px",
        filter: "brightness(0.9)",
        height: "100%",
        [breakpoints.only("xl")]: {
          gridArea: "1 / 1 / 2 / 2",
        },
      })}
    >
      <VuiBox display="flex" flexDirection="column" sx={{ height: "100%" }}>
        <VuiBox display="flex" flexDirection="column" mb="auto">
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="3px">
            Welcome back!
          </VuiTypography>
          <VuiTypography color="white" variant="button" fontWeight="regular">
            Nice to see you, Alexis Montalvo!
          </VuiTypography>
        </VuiBox>
        {/* In the middle and center */}
        <VuiBox display="flex" justifyContent="center" mb="auto">
          <VuiBox
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <VuiTypography
              color="white"
              variant="h3"
              fontWeight="bold"
              mb="5px"
            >
              Streaks
            </VuiTypography>
            <VuiTypography color="white" variant="h2" fontWeight="bold">
              43 Days
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox justifySelf="flex-end">
          <VuiTypography
            component="a"
            href="/map"
            variant="button"
            color="white"
            fontWeight="regular"
            sx={{
              mr: "5px",
              display: "inline-flex",
              alignItems: "center",
              justifySelf: "flex-end",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            Go to the map
            <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_forward</Icon>
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default Welcome;
