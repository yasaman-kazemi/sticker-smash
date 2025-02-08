import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import ImageViewer from "@/component/ImageViewer";
import Button from "@/component/Button";

const placeHolder = require("../../assets/images/greeting-cat.jpeg");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {/* <Image source={placeHolder} style={styles.image} /> */}
        <ImageViewer imageSrc={placeHolder} />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Choose a photo" theme="primary"></Button>
        <Button label="Use this picture"></Button>
      </View>
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
});
