import { FC } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { brown, amber, green, indigo } from "@mui/material/colors";
import { MarkdownPage } from "@components/MarkdownPage";

import "styles/App.css";

import index from "@contents/index.md";

const theme = createTheme({
  typography: {
    fontFamily: "'iA Writer Quattro' , sans-serif",
    h1: { fontSize: "2.2rem", fontWeight: "bolder" },
    h2: { fontSize: "1.8rem", fontWeight: "bolder" },
    h3: { fontSize: "1.6rem", fontWeight: "bolder" },
    h4: { fontSize: "1.4rem", fontWeight: "bolder" },
    h5: { fontSize: "1.2rem", fontWeight: "bolder" },
    h6: { fontSize: "1rem", fontWeight: "bolder" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: amber[50],
          color: brown[700],
        },
        a: {
          "&": { color: green[500] },
          "&:hover": {
            color: green[400],
            backgroundColor: amber[100],
            borderRadius: "0.2rem",
          },
        },
        code: {
          color: indigo[300],
        },
        pre: {
          backgroundColor: `${amber[100]}80`,
          padding: "1.2rem",
          borderRadius: "0.4rem",
        },
      },
    },
  },
});

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MarkdownPage contentPath={index} />
    </ThemeProvider>
  );
};
