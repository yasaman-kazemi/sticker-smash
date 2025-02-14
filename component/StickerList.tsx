import { Image, ImageSource } from "expo-image";
import { useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet } from "react-native";

type Props = {
  onSelect: (image: string) => void;
  onCloseModal: () => void;
};

export default function StickerList({ onSelect, onCloseModal }: Props) {
  const [images] = useState([
    require("../assets/images/cat.png"),
    require("../assets/images/black-cat.png"),
    require("../assets/images/ha-cat.png"),
    require("../assets/images/scream.png"),
    require("../assets/images/cry-cat.png"),
  ]);
  return (
    <FlatList
      horizontal
      data={images}
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={styles.image}></Image>
        </Pressable>
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
