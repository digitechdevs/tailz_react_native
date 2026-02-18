import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="user" options={{ title: 'User Profile' }} />
      <Stack.Screen name="team" options={{ title: 'Team Members' }} />
    </Stack>
  );
}
