import { Stack } from "expo-router";

// Layout raiz: aplica la configuración global para las pantallas hijas
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        // Estilo del encabezado en toda la aplicación.
        headerStyle: { backgroundColor: "#1a1a2e" },
        // Color de botones e iconos del header.
        headerTintColor: "#FFD700",
        // Estilo del texto del título del header.
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
  );
}