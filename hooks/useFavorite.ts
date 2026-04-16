import * as SecureStore from "expo-secure-store";
import { useState, useEffect, useCallback } from "react";

const FAVORITE_KEY = "favorite_team";

export function useFavorite() {
    const [favoriteId, setFavoriteId] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFavorite();
    }, []);

    const loadFavorite = async () => {
        try {
            const saved = await SecureStore.getItemAsync(FAVORITE_KEY);
            setFavoriteId(saved);
        } catch (error) {
            console.error("Error loading favorite:", error);
        } finally {
            setLoading(false);
        }
    };

    const toggleFavorite = useCallback(async (teamId: string) => {
        try {
            if (favoriteId === teamId) {
                await SecureStore.deleteItemAsync(FAVORITE_KEY);
                setFavoriteId(null);
            } else {
                await SecureStore.setItemAsync(FAVORITE_KEY, teamId);
                setFavoriteId(teamId);
            }
        } catch (error) {
            console.error("Error saving favorite:", error);
        }
    }, [favoriteId]);

    const isFavorite = useCallback((teamId: string) => {
        return favoriteId === teamId;
    }, [favoriteId]);

    return { favoriteId, loading, toggleFavorite, isFavorite };
}
