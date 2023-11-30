import { Text, View, StyleSheet, Pressable, Image } from "react-native";

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
            <Image source={film.poster} style={styles.filmPoster} />
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

        fontFamily: "arial",
        backgroundColor: "#6b6b6b",
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
        justifyContent: "Space-Between",

        position: "absolute",
        bottom: 0,
        width: "100%",
    },

    button: {
        width: "33%",
        margin: "0",
        padding: "0.5rem",
        borderRadius: "0.5rem 0 0.5rem 0",

        textAlign: "center",
        backgroundColor: "#e01616",
    },
});
