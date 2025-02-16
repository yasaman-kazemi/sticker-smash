import { View } from "react-native";
import { StyleSheet } from "react-native";
import ImageViewer from "@/component/ImageViewer";
import Button from "@/component/Button";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useRef, useState } from "react";
import IconButton from "@/component/IconButton";
import AddButton from "@/component/AddButton";
import EditOptionModal from "@/component/EditOptionModal";
import StickerList from "@/component/StickerList";
import EmojiSticker from "@/component/EmojiSticker";
import * as MediaLibrary from "expo-media-library";

//capture a view as an image
import { captureRef } from "react-native-view-shot";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const placeHolder = require("../../assets/images/greeting-cat.jpeg");

export default function Index() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined);

  //use this to validate we have permission
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const imageRef = useRef<View>(null);

  useEffect(() => {
    if (!permissionResponse?.granted) requestPermission();
  }, []);

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

  const onSaveImageAsync = async () => {
    try {
      const localUri = await captureRef(imageRef, {
        height: 440,
        quality: 1,
      });

      await MediaLibrary.saveToLibraryAsync(localUri);
      if (localUri) {
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={imageRef} collapsable={false}>
          <ImageViewer imageSrc={image || placeHolder} />
          {pickedEmoji && (
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
          )}
        </View>
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
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      )}
      <EditOptionModal visible={isModalOpen} onClose={modalClose}>
        <StickerList onSelect={setPickedEmoji} onCloseModal={modalClose} />
      </EditOptionModal>
    </GestureHandlerRootView>
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
