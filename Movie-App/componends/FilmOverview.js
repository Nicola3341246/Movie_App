import { Text, View, ScrollView, StyleSheet, Pressable, Image } from "react-native";

export default function FilmOverview({ film, back, deleteFilm, editFilm }) {
    if (film == undefined || film.title === undefined) {
        return (
            <View>
                <Text style={styles.title}>
                    This is what happens when you find a stranger in the Alps!
                </Text>
                <Text>In other Words: There is no data for This Film</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>{film.title}</Text>
                <Image source={film.poster} style={styles.filmPoster} />
                <Text style={styles.description}>{film.description}</Text>
            </ScrollView>
            <View style={styles.bottomBar}>
                <Pressable style={styles.button} onPress={deleteFilm}>
                    <Text>Delete</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={editFilm}>
                    <Text>Edit</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={back}>
                    <Text>Back</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: "0",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#6b6b6b",
    },

    scrollView: {
        height: "1%",
    },

    title: {
        fontSize: 24,
        textAlign: "center",
    },

    filmPoster: {
        width: "100%",
        maxHeight: "100%",
        minHeight: 200,
    },

    description: {
        textAlign: "center",
    },

    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        width: "100%",
    },

    button: {
        width: "33%",
        margin: 0,
        padding: 8,
        borderRadius: 8,

        textAlign: "center",
        backgroundColor: "#e01616",
    },
});
