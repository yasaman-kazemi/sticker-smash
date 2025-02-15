import { View } from "react-native";
import { StyleSheet } from "react-native";
import ImageViewer from "@/component/ImageViewer";
import Button from "@/component/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import IconButton from "@/component/IconButton";
import AddButton from "@/component/AddButton";
import EditOptionModal from "@/component/EditOptionModal";
import StickerList from "@/component/StickerList";
import { ImageSource } from "expo-image";
import EmojiSticker from "@/component/EmojiSticker";

const placeHolder = require("../../assets/images/greeting-cat.jpeg");

export default function Index() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setShowOptions(true);
    } else alert("pick a photo.");
  };

  const onReset = () => {
    setShowOptions(false);
    setImage(placeHolder);
    setPickedEmoji(undefined);
  };

  const onAddSticker = () => {
    setIsModalOpen(true);
  };

  const onSave = async () => {
    // we will implement this later
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSrc={image || placeHolder} />
        {pickedEmoji && (
          <EmojiSticker stickerSource={pickedEmoji} imageSize={60} />
        )}
      </View>
      {!showOptions ? (
        <View style={styles.buttonContainer}>
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          ></Button>
          <Button label="Use this picture"></Button>
        </View>
      ) : (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <AddButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSave} />
          </View>
        </View>
      )}
      <EditOptionModal visible={isModalOpen} onClose={modalClose}>
        <StickerList onSelect={setPickedEmoji} onCloseModal={modalClose} />
      </EditOptionModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fdf2e9",
    padding: 16,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 25,
  },
  imageContainer: { flex: 1, margin: 8 },
  buttonContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
