import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { queryClient } from "../src/core/query/query-client";

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="user" options={{ title: "User Profile" }} />
        <Stack.Screen name="team" options={{ title: "Team Members" }} />
        <Stack.Screen name="modal" options={{ title: "Modal" }} />
      </Stack>
    </QueryClientProvider>
  );
}
