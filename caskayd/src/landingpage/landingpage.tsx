import React from "react";
import "./style.css";
import { Box, Button, Link, Stack, Typography } from "@mui/material";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "light",
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 2,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Logo
        </Typography>
        <Link href="">
          <Button variant="text" sx={{color: "white"}}>Start Using Caskayd</Button>
        </Link>
      </Stack>
      <div className="background" >
        <Box
          sx={{
            gap: {
              sm: 8,
              md: 15,
              lg: 20,
            },
          }}
        >
          <Stack
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "white",
                fontWeight: "bold",
                letterSpacing: 2,
                /* textTransform: "uppercase", */
                marginBottom: 2,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              #1 Influencer Marketing <br /> Platform
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "light",
                letterSpacing: 2,
                /* textTransform: "uppercase", */
                marginBottom: 2,
                fontFamily: "Roboto, sans-serif",
                fontSize: 20,
              }}
            >
              Focus on your products, we&apos;ll handle the rest. Our intuitive
              platform makes it easy <br /> to create a stunning online store
              and reach your customers
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "bold",
                letterSpacing: 2,
                /* textTransform: "uppercase", */
                marginBottom: 2,
                fontFamily: "Roboto, sans-serif",
              }}
            >
              Quick one! Where do you belong?
            </Typography>
            <Stack
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              sx={{
                gap: {
                  sm: 8,
                  md: 15,
                  lg: 20,
                },
              }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: "white", color: "black" }}
              >
                Creator
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: "black", color: "white" }}
              >
                Business
              </Button>
            </Stack>
          </Stack>
        </Box>
      </div>
    </div>
  );
}
