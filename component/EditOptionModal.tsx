import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Modal, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

export default function EditOptionModal({ visible, children, onClose }: Props) {
  return (
    //change the animation type
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Edit photo</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={18} color="#000"></MaterialIcons>
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    height: "30%",
    width: "100%",
    backgroundColor: "#fdf2e9",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "20%",
    backgroundColor: "#e6ceaa",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  title: { color: "#000", fontSize: 20, fontWeight: "bold" },
});
