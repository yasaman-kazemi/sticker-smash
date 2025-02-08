import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function AddButton({ onPress }: Props) {
  return (
    <View style={styles.addButtonContainer}>
      <Pressable onPress={onPress} style={styles.addButton}>
        <MaterialIcons size={38} name="add" color="#25292e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#7b241c",
    borderRadius: 42,
    padding: 3,
  },
  addButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
