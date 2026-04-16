import { Stack } from "expo-router";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const checkFavorite = async () => {
      try {
        const favorite = await SecureStore.getItemAsync("favorite_team");
        if (favorite) {
          router.push(`/team/${favorite}`);
        }
      } catch (error) {
        console.error("Error checking favorite:", error);
      }
    };
    checkFavorite();
  }, []);

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