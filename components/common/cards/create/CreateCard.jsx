import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, useWindowDimensions } from "react-native";

const CreateCard = ({ item, index, numColumns, handleClick }) => {
  const even = Number(index) % 3 === 0;
  const evenMid = (index - 1) % 3 === 0;

  const { width } = useWindowDimensions();
  const imageWidth = width / numColumns;
  const imageHeight = (item.images.downsized_large.height / item.images.downsized_large.width) * imageWidth;

  return (
    <View style={[styles.container, { width: imageWidth, height: imageHeight, paddingLeft: even ? 32 / 2: 4, paddingRight: !even ? (evenMid ? 4 : 32 / 2) : 4,  }]}>
      <TouchableOpacity onPress={() => handleClick(item)} style={styles.touchable}>
          <Image style={styles.image} source={{ uri: item.images.downsized_large.url }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 13
  },
  touchable: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: '#D9D9D9'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8
  },
});

export default CreateCard;
