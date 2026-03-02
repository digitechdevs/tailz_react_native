import { QueryClient } from '@tanstack/react-query';

// Configure a centralized React Query client
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2, // Retry failed requests 2 times
            staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
            // refetchOnWindowFocus: false, // Turn off for React Native or handle AppState
        },
    },
});
