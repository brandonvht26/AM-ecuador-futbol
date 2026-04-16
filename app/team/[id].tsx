import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import { teams } from "../../data/teams";

export default function TeamDetailScreen() {
    // Lee el id desde la ruta dinámica /team/[id].
    const { id } = useLocalSearchParams<{ id: string }>();
    // Busca el equipo correspondiente en el arreglo de datos local.
    const team = teams.find((t) => t.id === id);

    // Muestra un estado vacío si el id no existe en los datos.
    if (!team) {
        return (
            <View style={styles.center}>
                <Text>Equipo no encontrado 😔</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Actualiza el título del header con el nombre del equipo */}
            <Stack.Screen options={{ title: team.name }} />
            <Image source={team.logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.name}>{team.name}</Text>
            <Text style={styles.city}>📍{team.city}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    // Contenedor principal centrado para la pantalla de detalle.
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f4f8"
    },

    // Variante centrada usada en el estado de equipo no encontrado.
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    // Tamaño del escudo/logo en la vista de detalle.
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20
    },

    // Estilo del nombre del equipo en la pantalla de detalle.
    name: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#1a1a2e",
        marginBottom: 8
    },

    // Estilo de la ciudad en la pantalla de detalle.
    city: {
        fontSize: 16,
        color: "#666",
    }
});