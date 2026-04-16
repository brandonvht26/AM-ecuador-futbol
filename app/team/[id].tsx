import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TouchableOpacity, ActivityIndicator, Modal } from "react-native";
import { useState } from "react";
import { teams } from "../../data/teams";

export default function TeamDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const team = teams.find((t) => t.id === id);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    if (!team) {
        return (
            <View style={styles.center}>
                <Text>Equipo no encontrado 😔</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{ title: team.name }} />
            
            {loading && (
                <ActivityIndicator size="large" color="#1a1a2e" style={styles.loader} />
            )}
            
            <Pressable onPress={() => setShowModal(true)}>
                <Image 
                    source={team.logo} 
                    style={styles.logo} 
                    resizeMode="contain"
                    onLoadEnd={() => setLoading(false)} 
                />
            </Pressable>
            
            <Text style={styles.name}>{team.name}</Text>
            <Text style={styles.city}>📍{team.city}</Text>
            <Text style={styles.stadiumName}>🏟️ {team.stadiumName}</Text>
            <Image source={team.stadium} style={styles.stadium} resizeMode="cover" />
            <Text style={styles.historia}>{team.historia}</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
                <Text style={styles.buttonText}>Ver Información Adicional</Text>
            </TouchableOpacity>
            
            <Modal visible={showModal} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>🏆 {team.name}</Text>
                        <Text style={styles.modalText}>Ciudad: {team.city}</Text>
                        <Text style={styles.modalText}>Estadio: {team.stadiumName}</Text>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setShowModal(false)}>
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f4f8",
        padding: 30
    },
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20
    },
    name: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#1a1a2e",
        marginBottom: 8
    },
    city: {
        fontSize: 16,
        color: "#666",
    },
    stadiumName: {
        fontSize: 16,
        color: "#888",
        marginTop: 4
    },
    stadium: {
        width: 250,
        height: 150,
        marginTop: 30,
        borderRadius: 25
    },
    historia: {
        fontSize: 30,
        color: "#333",
        textAlign: "justify",
        marginTop: 20,
        paddingHorizontal: 20
    },
    loader: {
        marginBottom: 10
    },
    button: {
        marginTop: 30,
        backgroundColor: "#1a1a2e",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold"
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 30,
        borderRadius: 15,
        width: "80%"
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#1a1a2e"
    },
    modalText: {
        fontSize: 16,
        marginBottom: 8,
        color: "#666"
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: "#1a1a2e",
        padding: 10,
        borderRadius: 8,
        alignItems: "center"
    },
    closeButtonText: {
        color: "#fff",
        fontWeight: "bold"
    }
});
