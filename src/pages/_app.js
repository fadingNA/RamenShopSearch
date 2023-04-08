import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "@/components/layout/layout";
import {SSRProvider} from "react-bootstrap";
import {SWRConfig} from "swr";

export default function App({Component, pageProps}) {
    return (
        <SSRProvider>
            <SWRConfig
            value={{
                fetcher: async (url) => {
                    const res = await fetch(url);
                    if (!res.ok){
                        const error = new Error("Error when fetching the API");
                        error.info = await res.json();
                        error.status =  res.status;
                        throw error;
                    }
                    return res.json();
                },
            }}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SWRConfig>
        </SSRProvider>

    )

}
