'use client';
import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Provider({children}){
    const [queryClient] = useState(new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: Infinity,
            }
        }
    }));

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" client={queryClient} />
        </QueryClientProvider>
    );
}