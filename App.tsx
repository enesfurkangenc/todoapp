import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Components
// import Card from "./src/components/card";
import CustomButton from "./src/components/button";

interface ITodo {
  text: string;
  completed: boolean;
}

export default function App() {
  const [value, setValue] = React.useState<string>("");
  const [todoList, setTodoList] = React.useState<ITodo[]>([]);

  const handleSubmit = (): void => {
    setTodoList([...todoList, { text: value, completed: false }]);
  };

  const toggleComplete = (index: number): void => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  };

  const removeItem = (index: number): void => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Application</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter your todo task.."
          value={value}
          onChangeText={(e) => setValue(e)}
          style={styles.inputBox}
        />
        <CustomButton title="+" onClick={handleSubmit} />
      </View>
      <Text style={styles.subtitle}>Your Tasks:</Text>
      {todoList.map((todo: ITodo, index: number) => (
        <TouchableOpacity
          style={[
            styles.listItem,
            { backgroundColor: todo.completed ? "red" : "grey" },
          ]}
          key={`${index}_${todo.text}`}
          onPress={() => toggleComplete(index)}
        >
          <Text
            style={[
              styles.task,
              { textDecorationLine: todo.completed ? "line-through" : "none" },
            ]}
          >
            {todo.text}
          </Text>
          <CustomButton title="-" onClick={() => removeItem(index)} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 35,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  inputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  inputBox: {
    padding: 8,
    width: "90%",
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 3,
  },
  task: {},
});
