"use client";
import { Box, Stack, TextField, Button, Menu, MenuItem } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import React, { useState } from "react";
import Link from "next/link";

export default function WaitList() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="background">
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "80%", sm: "75%", md: "68%", lg: "50%" },
          height: "60vh",
          backgroundColor: "black",
          borderRadius: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Stack
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100%",
          }}
          sx={{
            gap: {
              xs: 4,
              sm: 4,
              md: 4,
              lg: 4,
            },
            paddingLeft: {
              xs: 4,
              sm: 8,
              md: 10,
              lg: 10,
            },
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            sx={{
              height: {
                xs: "15px",
                sm: "18px",
                md: "24px",
                lg: "30px",
              },
              width: {
                xs: "15px",
                sm: "18px",
                md: "24px",
                lg: "30px",
              },
            }}
          >
            <Link
              href="./"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </Box>
          <TextField
            style={{ backgroundColor: "white", borderRadius: 10 }}
            sx={{ width: { xs: 200, sm: 300, md: 300, lg: 300 } }}
            label="Input your email"
          />
          <TextField
            style={{ backgroundColor: "white", borderRadius: 10 }}
            sx={{ width: { xs: 200, sm: 300, md: 300, lg: 300 } }}
            label="Input your number"
          />
          <div>
            <Button
              aria-controls={open ? "dropdown-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              variant="contained"
              endIcon={<FontAwesomeIcon icon={faChevronDown} />}
              style={{ backgroundColor: "#2E2E2E", borderRadius: 10 }}
            >
              Business Category
            </Button>
            <Menu
              id="dropdown-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          <Stack
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link href="">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  color: "black",
                  fontSize: { xs: 12, sm: 16, md: 18, lg: 20, xl: 22 },
                  width: "100%",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                  fontWeight: "normal",
                  height: { xs: "30px", sm: "35px", md: "38px", lg: "40px" },
                  textWrap: "nowrap",
                  "&:hover": {
                    transform: "scale(1.05)",
                    //backgroundColor: "#f0f0f0",
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                Submit
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
