import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import InputForm from "./InputForm";

export default function FilmList() {
  const [filmList, setFilmList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    const Films = [
      { name: "HeLO", description: "ASDASDASD" },
      { name: "2", description: "ASDASD" },
    ];
    setFilmList(Films);
  }, []);

  const handleSubmit = (filmData) => {
    setFilmList([...filmList, filmData]);
    setShowForm(false);
    setShowList(true);
  };

  const handleFormOpen = () => {
    setShowForm(true);
    setShowList(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setShowList(true);
  };

  return (
    <View>
      {showList && (
        <View>
          <Button title="+" onPress={handleFormOpen}></Button>
          {filmList.map((film, index) => (
            <View key={index}>
              <Text>Name: {film.name}</Text>
              <Text>Description: {film.description}</Text>
            </View>
          ))}
        </View>
      )}

      {showForm && (
        <View>
          <InputForm handleSubmit={handleSubmit} />
          <Button title="Cancel" onPress={handleCancel} />
        </View>
      )}
    </View>
  );
}
