import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  title?: string;
  onClick?: () => void;
}

const styled = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

const CustomButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styled.container}>
      <Text style={styled.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
