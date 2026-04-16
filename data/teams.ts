import { ImageSourcePropType } from "react-native";

export interface Team {
    id: string;
    name: string;
    city: string;
    logo: ImageSourcePropType;
}

export const teams: Team[] = [
    {
        id: "1",
        name: "Barcelona SC",
        city: "Guayaquil",
        logo: require("../assets/logos/barcelona.png"),
    },
    {
        id: "2",
        name: "LDU",
        city: "Quito",
        logo: require("../assets/logos/ldu.png"),
    },
    {
        id: "3",
        name: "Emelec",
        city: "Guayaquil",
        logo: require("../assets/logos/emelec.png"),
    },
];