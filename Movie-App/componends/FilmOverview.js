import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import TestPoster from "../assets/img/TestPoster.jpg";

export default function FilmOverview({ film, back, deleteFilm, editFilm }) {
    if (film == undefined || film.title === undefined) {
        return (
            <View>
                <Text style={styles.title}>
                    This is what happens when you find a stranger in the Alps!
                </Text>
                <Text>In other Words: There is no data to This Film</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{film.title}</Text>
            <Image source={filmPoster} style={styles.filmPoster} />
            <Text style={styles.description}>{film.description}</Text>
            <View style={styles.bottomBar}>
                <Pressable style={styles.button} onPress={deleteFilm}>
                    Delete
                </Pressable>
                <Pressable style={styles.button} onPress={editFilm}>
                    Edit
                </Pressable>
                <Pressable style={styles.button} onPress={back}>
                    Back
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",

        width: "100%",
        height: "100%",
    },

    title: {
        fontSize: "2rem",
        textAlign: "center",
    },

    filmPoster: {
        width: "100%",
        minHeight: "50%",
    },

    description: {
        textAlign: "center",
    },

    bottomBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",

        position: "absolute",
        bottom: 0,
        width: "100%",
    },

    button: {
        backgroundColor: "grey",
        padding: "0.5rem",
        width: "15%",
    },
});
