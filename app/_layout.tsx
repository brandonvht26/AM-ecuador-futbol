import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ 
        title: "Equipos de Fútbol",
        headerStyle: { backgroundColor: "#1a1a2e" },
        headerTintColor: "#FFD700",
        headerTitleStyle: { fontWeight: "bold" },
      }} />
      <Stack.Screen name="team/[id]" options={{ 
        headerStyle: { backgroundColor: "#1a1a2e" },
        headerTintColor: "#FFD700",
        headerTitleStyle: { fontWeight: "bold" },
      }} />
    </Stack>
  );
}