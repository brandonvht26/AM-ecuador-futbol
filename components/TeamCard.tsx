import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Team } from "../data/teams";

interface Props {
    // Datos del equipo para renderizar la tarjeta y construir la ruta de detalle.
    team: Team;
}

export default function TeamCard({ team }: Props) {
    const router = useRouter();

    return (
        <TouchableOpacity
            style={styles.card}
            // Navega a la plantalla de detalle dinámica del equipo seleccionando.
            onPress={() => router.push(`/team/${team.id}`)}
        >
            <Image source={team.logo} style={styles.logo} resizeMode="contain" />
            <View>
                <Text style={styles.name}>{team.name}</Text>
                <Text style={styles.city}>📍{team.city}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    // Diseño horizontal de la tarjeta con elevación sútil para listas.
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 12,
        padding: 12,
        elevation: 3
    },

    // Tamaño del logo y separación respecto al bloque de texto.
    logo: {
        width: 60,
        height: 60,
        marginRight: 16
    },

    // Estilo principal de texto para el nombre del equipo.
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0e0b0b"
    },
    city: {
        fontSize: 13,
        color: "#666",
        marginTop: 4
    }
})