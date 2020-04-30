import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  text?: string;
}

const styled = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "purple",
    borderRadius: 3,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

const Card: React.FC<Props> = ({ text }) => {
  return (
    <TouchableOpacity
      style={styled.container}
      onPress={() => alert("Hello World")}
    >
      <Text style={styled.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Card;
