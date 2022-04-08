import { createTheme } from "@mui/material/styles";
import Breakpoints from "@mui/material/styles";
import { color } from './ColorPalette'


// export default createTheme({})

export default createTheme({
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
  palette: {
    common: {
      navyBlue: `${navyBlue}`,
      dimGray: `${dimGray}`,
      offWhite: `${offWhite}`,
      lightBlue: `${caribbeanBlue}`,
      lightGray: `${lightGray}`,
      darkSlateBlue: `${darkSlateBlue}`,
      slateRed:  `${slateRed}`
    },
    primary: {
      main: `${darkSlateBlue}`,
      // main: white,
    },
    secondary: {
      main: `${offWhite}`,
    },
    action: {
      active: `${caribbeanBlue}`,
    },
  },
  typography: {
    body1: {
      color: `${offWhite}a9`,
      fontSize: '0.88rem',
      fontFamily: 'Inter',
      fontWeight: 400,
      // lineHeight: 1.45,
      [breakpoints.up('md')]: {
        fontSize: '1rem',
      },
    },
    body2: {
      color: `${dimGray}`,
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '0.95rem',
      [breakpoints.up('md')]: {
        fontSize: '1.05rem',
      },
    },
    h3: {color: slateWhite},
    h4: {color: cream},
    h5: {color: offWhite},
    h6: {color:  offWhite},
    caption: {
      color: `${dimGray}`,
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '0.9rem',
      textTransform: 'none',
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {},
    },
  },
})
