import { StyleSheet, View, Text, TouchableOpacity, Image, useWindowDimensions } from "react-native";
import { Stack, useRouter } from "expo-router";
// import styles from "./popularjobcard.style";
import { FONT } from  "../../../../constants/theme";

const NewGIFCard = ({ item, index }) => {
  const router = useRouter();
  const even = Number(index) % 2 === 0;

  const handleNavigate = (id) => {
    router.push(`/detail/${id}`);
  }

  const { width } = useWindowDimensions();
  const imageWidth = width / 2;
  const imageHeight = (item.urlImg.images.downsized_large.height / item.urlImg.images.downsized_large.width) * imageWidth;

  return (
    <TouchableOpacity onPress={() => handleNavigate(item.id)} style={{width: '100%', height: '100%', paddingBottom: 16, paddingLeft: even ? 32 / 2: 5, paddingRight: !even ? 32 / 2: 5}}>
      <Image style={{height: imageHeight, resizeMode: 'cover', borderTopLeftRadius: 8,
    borderTopRightRadius: 8}} source={{ uri: item.urlImg.images.downsized_large.url }} />
      <View style={{borderColor: '#F2F2F2', borderWidth: 1, padding: 11, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, width: '100%'}}>
        <Text style={{lineHeight: 19, fontFamily: FONT.interRegular, fontSize: 16, fontWeight: 400}}>{item.title}</Text>
        <Text style={{fontSize: 8, fontFamily: FONT.regularPoppin, opacity: 0.36}}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 1,
  },
  image: {
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
});

export default NewGIFCard;
