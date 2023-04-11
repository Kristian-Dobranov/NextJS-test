import "/sections/Agency/agencyCSS.css"
import { ThemeProvider } from "styled-components";
import { theme } from "~/styles";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
