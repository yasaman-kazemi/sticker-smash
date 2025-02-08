import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  imageSrc: string;
};
export default function ImageViewer({ imageSrc }: Props) {
  return <Image source={imageSrc} style={styles.image}></Image>;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 25,
  },
});
