import { FlatList, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import TeamCard from "../components/TeamCard";
import { teams } from "../data/teams";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={teams}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <TeamCard team={item} />}
                contentContainerStyle={styles.list}
            />
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    // Contenedor base de la pantalla.
    container: {
        flex: 1,
        backgroundColor: "#f0f4f8"
    },

    // Espaciado vertical interno de la lista.
    list: {
        paddingVertical: 10
    },
});