import { ImageSourcePropType } from "react-native";

export interface Team {
    id: string;
    name: string;
    city: string;
    logo: ImageSourcePropType;
    stadiumName?: string;
    stadium?: ImageSourcePropType;
    historia: string;
}

export const teams: Team[] = [
    {
        id: "1",
        name: "Barcelona SC",
        city: "Guayaquil",
        logo: require("../assets/logos/barcelona.png"),
        stadiumName: "Estadio Monumental",
        stadium: require("../assets/estadios/barcelona-stadium.jpg"),
        historia: "Fundado en 1925, Barcelona SC es el club más popular de Ecuador. Con 16 títulos nacionales y una gran base de seguidores, es conocido por su estilo ofensivo y su histórica rivalidad con Emelec."
    },
    {
        id: "2",
        name: "LDU",
        city: "Quito",
        logo: require("../assets/logos/ldu.png"),
        stadiumName: "Estadio Rodrigo Paz Delgado",
        stadium: require("../assets/estadios/ldu-stadium.jpg"),
        historia: "Liga Deportiva Universitaria, fundada en 1918, es el club más exitoso de Ecuador con 11 títulos nacionales y 3 Copas Libertadores. Conocido por su fuerte defensa y su base de seguidores en Quito, es un pilar del fútbol ecuatoriano."
    },
    {
        id: "3",
        name: "Emelec",
        city: "Guayaquil",
        logo: require("../assets/logos/emelec.png"),
        stadiumName: "Estadio George Capwell",
        stadium: require("../assets/estadios/emelec-stadium.jpg"),
        historia: "Fundado en 1929, Club Sport Emelec es el principal rival de Barcelona SC. Con 14 títulos nacionales, es conocido por su estilo de juego dinámico y su fuerte base de seguidores en Guayaquil."
    },
];