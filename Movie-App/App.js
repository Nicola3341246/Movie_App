import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import FilmOverview from "./components/FilmOverview.js";
import InputButoon from "./components/Button.js";
import TestPoster from "./assets/img/TestPoster.jpg";

console.log(TestPoster);
const testFilm = {
    title: "The Godfather",
    poster: TestPoster,
    description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum",
};

export default function App() {
    const [showInput, setShowInput] = useState(false);

    const handleButtonPress = () => {
        setShowInput(!showInput);
    };

    const back = () => {
        alert("Back");
    };

    const editFilm = () => {
        alert("Edit");
    };

    const deleteFilm = () => {
        alert("Delete");
    };

    return (
        <View style={styles.container}>
            <FilmOverview film={testFilm} back={back} editFilm={editFilm} deleteFilm={deleteFilm} />
        </View>
        // <InputButoon></InputButoon>
        // <View style={styles.container}>
        //   {showInput ? (
        //     <Text>Input is shown</Text>
        //   ) : (
        //     <Text>No input field shown</Text>
        //   )}
        //   <Button
        //     title={showInput ? 'Hide Input' : 'Show Input'}
        //     onPress={handleButtonPress}
        //   />
        // </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
    },
});
