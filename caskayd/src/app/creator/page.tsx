import React from "react";
import "./style.css";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faGooglePlay,
  faInstagram,
  faFacebookF,
  faTiktok,
  faYoutube,
  faXTwitter,
  faWhatsapp,
  faSnapchatGhost,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function ContentCreator() {
  return (
    <div className="landing-page">
      <Stack
        style={{
          position: "fixed",
          marginTop: "2rem",
          padding: "1rem",
          top: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
          backgroundColor: "black",
          borderRadius: 20,
          overflowY: "hidden",
        }}
        sx={{width: {xs: "90%", sm: "88%", md: "84%", lg: "80%"}}}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: "light",
            letterSpacing: 2,
            textTransform: "uppercase",
            fontFamily: "Roboto, sans-serif",
            paddingLeft: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
          }}
        >
          Logo
        </Typography>
        <Link href="/waitlist">
          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "transparent",
              border: "2px solid transparent",
              transition: "all 0.3s ease",
              borderRadius: "8px",
              fontSize: { xs: 12, sm: 16, md: 18, lg: 20, xl: 22 },
              textWrap: "nowrap",

              "@media (hover: hover)": {
                "&:hover": {
                  backgroundColor: "white   ",
                  transform: "scale(1.05)",
                  color: "black",
                  borderColor: "white",
                },
              },
            }}
          >
            Start Using Caskayd
          </Button>
        </Link>
      </Stack>
      <div className="background">
        <Box>
          <Stack
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "10px",
              paddingRight: "10px",
              position: "relative",
              overflowY: "hidden",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 20, sm: 30, md: 45, lg: 70, xl: 80 },
                color: "white",
                fontWeight: "bold",
                letterSpacing: 2,
                /* textTransform: "uppercase", */
                marginBottom: 2,
                fontFamily: "Roboto, sans-serif",
                paddingLeft: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
                paddingRight: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
                mb: 4,
              }}
            >
              Turn Your Content Into Income
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "light",
                letterSpacing: 2,
                /* textTransform: "uppercase", */
                marginBottom: 2,
                fontFamily: "Roboto, sans-serif",
                paddingLeft: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
                paddingRight: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
                fontSize: { xs: 16, sm: 16, md: 18, lg: 20, xl: 22 },
                mb: 8,
              }}
            >
              Ready to monetize your passion? Our platform empowers creators
              like you to effortlessly transform your valuable content into a
              steady revenue stream
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row", md: "row" }}
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
              sx={{
                gap: {
                  xs: 4,
                  sm: 8,
                  md: 12,
                  lg: 20,
                },
              }}
            >
         {/*     <Link>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "12px",
                    color: "black",
                    fontSize: { xs: 12, sm: 16, md: 18, lg: 20, xl: 22 },
                    transition: "all 0.3s ease",
                    textTransform: "none",
                    fontWeight: "normal",
                    height: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
                    textWrap: "nowrap",
                    "&:hover": {
                      transform: "scale(1.05)",
                      //backgroundColor: "#f0f0f0",
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  Open Caskayd Web
                </Button>
              </Link> */}
              <Link style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "12px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    height: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
                    alignItems: "center",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  <Stack
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
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
                      <FontAwesomeIcon icon={faGooglePlay} />
                    </Box>

                    <Stack
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        textAlign: "left",
                        marginLeft: 10,
                      }}
                    >
                      <Typography
                        sx={{
                          textWrap: "nowrap",
                          fontSize: {
                            xs: "9px",
                            sm: "10px",
                            md: "12px",
                            lg: "14px",
                          },
                          textTransform: "uppercase",
                          fontWeight: "light",
                          textAlign: "left",
                        }}
                      >
                        Get it on
                      </Typography>
                      <Typography
                        sx={{
                          textWrap: "nowrap",
                          fontSize: {
                            xs: "15px",
                            sm: "18px",
                            md: "21px",
                            lg: "24px",
                          },
                        }}
                      >
                        Google Play
                      </Typography>
                    </Stack>
                  </Stack>
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "12px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    height: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
                    alignItems: "center",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "#111",
                    },
                  }}
                >
                  <Stack
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
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
                      <FontAwesomeIcon icon={faApple} />
                    </Box>

                    <Stack
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: 10,
                      }}
                    >
                      <Typography
                        sx={{
                          textWrap: "nowrap",
                          fontSize: {
                            xs: "9px",
                            sm: "10px",
                            md: "12px",
                            lg: "14px",
                          },
                        }}
                      >
                        Download on the
                      </Typography>
                      <Typography
                        sx={{
                          textWrap: "nowrap",
                          fontSize: {
                            xs: "15px",
                            sm: "18px",
                            md: "21px",
                            lg: "24px",
                          },
                        }}
                      >
                        App Store
                      </Typography>
                    </Stack>
                  </Stack>
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Box>
        <Stack
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            aspectRatio: "4 / 2",
            px: { xs: 2, sm: 4, md: 8 },
            mb: 0,
          }}
        >
          <Image
            src="/AmplifyYourBrandWithInfluencers.png"
            alt="amp"
            fill
            style={{ objectFit: "contain" }}
          />
        </Stack>
      </div>
      <Typography
        sx={{
          fontSize: { xs: 15, sm: 25, md: 30, lg: 50, xl: 65 },
          color: "white",
          fontWeight: "light",
          letterSpacing: 2,
          /* textTransform: "uppercase", */
          marginTop: 5,
          fontFamily: "Roboto, sans-serif",
          paddingLeft: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
          paddingRight: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
          mb: 4,
        }}
      >
        Advertise with any of your platforms
      </Typography>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "95%",
          overflowY: "hidden",
          height: 100,
        }}
        sx={{
          gap: {
            xs: 4,
            sm: 8,
            md: 12,
            lg: 20,
          },
          marginBottom: {
            xs: 0.5,
            sm: 1,
            md: 1.5,
            lg: 3,
          },
        }}
      >
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          sx={{
            gap: {
              xs: 0.4,
              sm: 0.6,
              md: 0.8,
              lg: 1,
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
            <FontAwesomeIcon icon={faInstagram} style={{color: "white"}} />
          </Box>
          <Typography
            sx={{
              textWrap: "nowrap",
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "17px",
                lg: "20px",
              },
            }}
          >
            Instagram
          </Typography>
        </Stack>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          sx={{
            gap: {
              xs: 0.4,
              sm: 0.6,
              md: 0.8,
              lg: 1,
            },
          }}
        >
          {" "}
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
            <FontAwesomeIcon icon={faFacebookF} style={{color: "white"}} />
          </Box>
          <Typography
            sx={{
              textWrap: "nowrap",
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "17px",
                lg: "20px",
              },
            }}
          >
            Facebook
          </Typography>
        </Stack>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          sx={{
            gap: {
              xs: 0.4,
              sm: 0.6,
              md: 0.8,
              lg: 1,
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
            <FontAwesomeIcon icon={faTiktok} style={{color: "white"}} />
          </Box>
          <Typography
            sx={{
              textWrap: "nowrap",
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "17px",
                lg: "20px",
              },
            }}
          >
            Tiktok
          </Typography>
        </Stack>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          sx={{
            gap: {
              xs: 0.4,
              sm: 0.6,
              md: 0.8,
              lg: 1,
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
            <FontAwesomeIcon icon={faYoutube} style={{color: "white"}} />
          </Box>
          <Typography
            sx={{
              textWrap: "nowrap",
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "17px",
                lg: "20px",
              },
            }}
          >
            Youtube
          </Typography>
        </Stack>
      </Stack>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "95%",
          overflowY: "hidden",
          height: 100,
        }}
        sx={{
          gap: {
            xs: 4,
            sm: 8,
            md: 12,
            lg: 20,
          },
          marginBottom: {
            xs: 2,
            sm: 4,
            md: 6,
            lg: 8,
          },
        }}
      >
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          sx={{
            gap: {
              xs: 0.4,
              sm: 0.6,
              md: 0.8,
              lg: 1,
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
            <FontAwesomeIcon icon={faXTwitter} style={{color: "white"}} />
          </Box>
          <Typography
            sx={{
              textWrap: "nowrap",
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "17px",
                lg: "20px",
              },
            }}
          >
            Twitter
          </Typography>
        </Stack>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          sx={{
            gap: {
              xs: 0.4,
              sm: 0.6,
              md: 0.8,
              lg: 1,
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
            <FontAwesomeIcon icon={faWhatsapp} style={{color: "white"}} />
          </Box>
          <Typography
            sx={{
              textWrap: "nowrap",
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "17px",
                lg: "20px",
              },
            }}
          >
            Whatsapp
          </Typography>
        </Stack>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          sx={{
            gap: {
              xs: 0.4,
              sm: 0.6,
              md: 0.8,
              lg: 1,
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
            <FontAwesomeIcon icon={faSnapchatGhost} style={{color: "white"}}/>
          </Box>
          <Typography
            sx={{
              textWrap: "nowrap",
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "17px",
                lg: "20px",
              },
            }}
          >
            Snapchat
          </Typography>
        </Stack>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          sx={{
            gap: {
              xs: 0.4,
              sm: 0.6,
              md: 0.8,
              lg: 1,
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
            <FontAwesomeIcon icon={faTelegramPlane} style={{color: "white"}} />
          </Box>
          <Typography
            sx={{
              textWrap: "nowrap",
              fontSize: {
                xs: "10px",
                sm: "14px",
                md: "17px",
                lg: "20px",
              },
            }}
          >
            Telegram
          </Typography>
        </Stack>
      </Stack>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 17, sm: 26, md: 38, lg: 50, xl: 60 },
            color: "white",
            fontWeight: "bold",
            letterSpacing: 2,
            /* textTransform: "uppercase", */
            marginBottom: 2,
            fontFamily: "Roboto, sans-serif",
            paddingLeft: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
            paddingRight: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
          }}
        >
          Earn From Every Post
        </Typography>
      </Stack>
      <Typography
        sx={{
          color: "white",
          fontWeight: "light",
          letterSpacing: 2,
          /* textTransform: "uppercase", */
          marginBottom: 2,
          fontFamily: "Roboto, sans-serif",
          paddingLeft: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
          paddingRight: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
          fontSize: { xs: 16, sm: 16, md: 18, lg: 20, xl: 22 },
          mb: 8,
        }}
      >
        Join campaigns and get paid to promote what you love.
      </Typography>
      <div className="earn">
        <Stack
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            aspectRatio: "4 / 2",
            bottom: 0,
            height: { xs: "45vh", sm: "60vh", md: "65vh", lg: "100vh" },
            marginTop: 10,
          }}
        >
          <Image
            src="/EarnFromEveryPost.png"
            alt="earn"
            fill
            style={{ objectFit: "inherit", borderRadius: 10 }}
          />
        </Stack>
      </div>
      <Stack
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 17, sm: 26, md: 38, lg: 50, xl: 60 },
            color: "white",
            fontWeight: "bold",
            letterSpacing: 2,
            /* textTransform: "uppercase", */
            marginBottom: 2,
            fontFamily: "Roboto, sans-serif",
            paddingLeft: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
            paddingRight: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
          }}
        >
          Skip The Gatekeepers
        </Typography>
      </Stack>
      <Typography
        sx={{
          color: "white",
          fontWeight: "light",
          letterSpacing: 2,
          /* textTransform: "uppercase", */
          marginBottom: 2,
          fontFamily: "Roboto, sans-serif",
          paddingLeft: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
          paddingRight: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
          fontSize: { xs: 16, sm: 16, md: 18, lg: 20, xl: 22 },
          mb: 8,
        }}
      >
        No managers. No middlemen. Just direct deals and clear payments
      </Typography>
      <div className="skip">
        <Stack
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "800px",
            aspectRatio: "4 / 2",
            bottom: 0,
            height: { xs: "45vh", sm: "60vh", md: "65vh", lg: "100vh" },
            marginTop: 10,
          }}
        >
          <Image
            src="/SkipTheGateKeepers.png"
            alt="skip"
            fill
            style={{ objectFit: "inherit", borderRadius: 10 }}
          />
        </Stack>
      </div>
      <Stack style={{ width: "100%", textAlign: "left" }}>
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 30, md: 45, lg: 70, xl: 80 },
            color: "white",
            fontWeight: "bold",
            letterSpacing: 3,
            /* textTransform: "uppercase", */
            marginBottom: 2,
            fontFamily: "Roboto, sans-serif",
            paddingLeft: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
            paddingRight: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
            mb: 4,
          }}
        >
          Try Caskayd Now
        </Typography>
      </Stack>
      <Stack
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          width: "100%",
          marginBottom: 150,
        }}
      >
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Stack
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              width: "30%",
            }}
          >
          {/*  <Link>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  color: "black",
                  fontSize: { xs: 12, sm: 16, md: 18, lg: 20, xl: 22 },
                  marginLeft: { xs: 2, sm: 4, md: 7, lg: 10, xl: 12 },
                  mb: { xs: 2, sm: 3, md: 4, lg: 5, xl: 12 },
                  width: "100%",
                  transition: "all 0.3s ease",
                  textTransform: "none",
                  fontWeight: "normal",
                  height: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
                  textWrap: "nowrap",
                  "&:hover": {
                    transform: "scale(1.05)",
                    //backgroundColor: "#f0f0f0",
                    backgroundColor: "#e0e0e0",
                  },
                }}
              >
                Open Caskayd Web
              </Button> 
            </Link> */}
            <Stack
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
              }}
              sx={{
                gap: {
                  xs: 3,
                  sm: 6,
                  md: 8,
                  lg: 10,
                },
              }}
            >
              <Link style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    borderRadius: "12px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    height: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
                    marginLeft: { xs: 2, sm: 4, md: 7, lg: 10, xl: 12 },
                    alignItems: "center",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "#e0e0e0",
                    },
                  }}
                >
                  <Stack
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
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
                      <FontAwesomeIcon icon={faGooglePlay} />
                    </Box>

                    <Stack
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        textAlign: "left",
                        marginLeft: 10,
                      }}
                    >
                      <Typography
                        sx={{
                          textWrap: "nowrap",
                          fontSize: {
                            xs: "9px",
                            sm: "10px",
                            md: "12px",
                            lg: "14px",
                          },
                          textTransform: "uppercase",
                          fontWeight: "light",
                          textAlign: "left",
                        }}
                      >
                        Get it on
                      </Typography>
                      <Typography
                        sx={{
                          textWrap: "nowrap",
                          fontSize: {
                            xs: "15px",
                            sm: "18px",
                            md: "21px",
                            lg: "24px",
                          },
                        }}
                      >
                        Google Play
                      </Typography>
                    </Stack>
                  </Stack>
                </Button>
              </Link>
              <Link style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "12px",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    display: "inline-flex",
                    height: { xs: "40px", sm: "50px", md: "60px", lg: "70px" },
                    alignItems: "center",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "#111",
                    },
                  }}
                >
                  <Stack
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
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
                      <FontAwesomeIcon icon={faApple} />
                    </Box>

                    <Stack
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginLeft: 10,
                      }}
                    >
                      <Typography
                        sx={{
                          textWrap: "nowrap",
                          fontSize: {
                            xs: "9px",
                            sm: "10px",
                            md: "12px",
                            lg: "14px",
                          },
                        }}
                      >
                        Download on the
                      </Typography>
                      <Typography
                        sx={{
                          textWrap: "nowrap",
                          fontSize: {
                            xs: "15px",
                            sm: "18px",
                            md: "21px",
                            lg: "24px",
                          },
                        }}
                      >
                        App Store
                      </Typography>
                    </Stack>
                  </Stack>
                </Button>
              </Link>
            </Stack>
          </Stack>
          <Stack style={{ width: "60%", right: 0 }}>
            <Typography
              variant="h5"
              sx={{
                color: "white",
                fontWeight: "light",
                letterSpacing: 2,
                textTransform: "uppercase",
                fontFamily: "Roboto, sans-serif",
                textAlign: "right",
              }}
            >
              Logo
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          marginBottom: 50,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontWeight: "light",
            letterSpacing: 2,
            /* textTransform: "uppercase", */
            fontFamily: "Roboto, sans-serif",
            paddingLeft: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
            paddingRight: { xs: 2, sm: 6, md: 8, lg: 10, xl: 13 },
            fontSize: { xs: 9, sm: 12, md: 14, lg: 17, xl: 22 },
            mb: 8,
          }}
        >
          Follow us on
        </Typography>
        <Stack
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            overflow: "hidden",
            height: "50px",
            marginTop: 3,
          }}
          sx={{
            gap: {
              xs: 3,
              sm: 6,
              md: 8,
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
              href=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                color: "white",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faXTwitter} style={{color: "white"}} />
            </Link>
          </Box>
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
              href=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                color: "white",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faFacebookF} style={{color: "white"}} />
            </Link>
          </Box>
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
              href=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                color: "white",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} style={{color: "white"}} />
            </Link>
          </Box>
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
              href=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                color: "white",
                textDecoration: "none",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} style={{color: "white"}} />
            </Link>
          </Box>
        </Stack>
      </Stack>
    </div>
  );
}
