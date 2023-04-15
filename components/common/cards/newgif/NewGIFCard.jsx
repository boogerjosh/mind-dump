import { StyleSheet, View, Text, TouchableOpacity, Image, useWindowDimensions } from "react-native";
import { useRouter } from "expo-router";
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
    <TouchableOpacity onPress={() => handleNavigate(item.id)} style={[styles.card, {paddingLeft: even ? 32 / 2: 5, paddingRight: !even ? 32 / 2: 5}]}>
      <Image style={[styles.image, {height: imageHeight}]} source={{ uri: item.urlImg.images.downsized_large.url }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%', height: '100%', paddingBottom: 16, 
  },
  image: {
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  textContainer: {
    borderColor: '#F2F2F2', 
    borderWidth: 1, 
    padding: 11, 
    borderBottomLeftRadius: 8, 
    borderBottomRightRadius: 8, 
    width: '100%'
  },
  title: {
    lineHeight: 19,
    fontFamily: FONT.interRegular,
    fontSize: 16,
    fontWeight: '400'
  },
  date: {
    fontSize: 8,
    fontFamily: FONT.regularPoppin,
    opacity: 0.36
  }
  });

export default NewGIFCard;
