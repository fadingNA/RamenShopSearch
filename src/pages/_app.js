import '@/styles/globals.css'
import '@/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "@/components/layout/layout";
import {SSRProvider} from "react-bootstrap";
import {SWRConfig} from "swr";
import {ColorModeContext, useMode} from "@/components/dashboard/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";

export default function App({Component, pageProps}) {
    const [theme, colorMode] = useMode();

    return (
        <SSRProvider>
            <SWRConfig
                value={{
                    fetcher: async (url) => {
                        const res = await fetch(url);
                        if (!res.ok) {
                            const error = new Error("Error when fetching the API");
                            error.info = await res.json();
                            error.status = res.status;
                            throw error;
                        }
                        return res.json();
                    },
                }}>
                <ColorModeContext.Provider value={colorMode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </SWRConfig>
        </SSRProvider>
    )

}
