'use client';

import Diamond from '@/components/Diamond';
import ReactFullpage from '@fullpage/react-fullpage';
import Box from '@mui/material/Box';

export default function HomePage() {
  return (
    <ReactFullpage
      licenseKey=""
      scrollingSpeed={700}
      loopHorizontal
      navigation
      sectionsColor={['#f5f5f5', '#0798ec', '#fc6c7c']}
      // '#ff5f45'
      render={() => {
        return (
          <Box id="fullpage-wrapper">
            <Box
              className="section"
              sx={{
                height: '100vh',
                background: 'white',
                justifyContent: 'flex-start',
              }}
            >
              <Box display="flex" height="100vh">
                <Box pt={4} sx={{ flex: 1 }}>
                  <Box pl={6}>
                    <Box pl={10}>
                      <Box component="img" src="/assets/logo-ho.png" width={230}></Box>
                    </Box>
                    <Box
                      mt={6}
                      position="relative"
                      sx={{
                        backgroundImage: 'url(/assets/line-rect.png)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: 150,
                        height: 150,
                      }}
                    >
                      <Box
                        position="absolute"
                        sx={{
                          transform: 'rotate(-90deg)',
                          color: 'black',
                          bottom: 38,
                          zIndex: 2,
                          right: 20,
                        }}
                      >
                        The Start
                      </Box>
                    </Box>
                    <Box py={16} px={10} position="relative">
                      <Box
                        fontWeight="bold"
                        sx={({ breakpoints }) => ({
                          fontSize: 24,
                          [breakpoints.up('sm')]: {
                            fontSize: 32,
                          },
                          [breakpoints.up('md')]: {
                            fontSize: 40,
                          },
                          [breakpoints.up('lg')]: {
                            fontSize: 44,
                          },
                        })}
                      >
                        YOUR VISION,
                      </Box>
                      <Box
                        fontWeight="bold"
                        sx={({ breakpoints }) => ({
                          fontSize: 24,
                          [breakpoints.up('sm')]: {
                            fontSize: 32,
                          },
                          [breakpoints.up('md')]: {
                            fontSize: 40,
                          },
                          [breakpoints.up('lg')]: {
                            fontSize: 44,
                          },
                        })}
                      >
                        OUR INNOVATION.
                      </Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: '38%',
                          left: '10%',
                          transform: 'translate(0%, -50%)',
                          fontSize: 260,
                          fontWeight: 'bold',
                          pointerEvents: 'none',
                          opacity: 0.05,
                        }}
                      >
                        01
                      </Box>
                    </Box>
                    <Box px={10} fontSize={32}>
                      你的想像，我們的創新。
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    // background: '#201F27',
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}
                >
                  <Box>
                    <Box>1.</Box>
                    <Box>2.</Box>
                    <Box>3.</Box>
                  </Box>
                  {/* <Diamond /> */}
                  {/* <Box
                    width="32vw"
                    height="32vw"
                    sx={{ background: 'red', transform: 'translateX(-100px)' }}
                  ></Box> */}
                </Box>
              </Box>
            </Box>
            <Box className="section" sx={{ height: '100vh' }}>
              Page 2
            </Box>
            <Box className="section" sx={{ height: '100vh' }}>
              Page 3
            </Box>
          </Box>
        );
      }}
      credits={{
        enabled: undefined,
        label: undefined,
        position: undefined,
      }}
    />
  );
}
