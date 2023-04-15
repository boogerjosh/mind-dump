import { Image, TouchableOpacity, View, useWindowDimensions, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailHeader = ({handleClickNavigate, urlImg}) => {
  const { width } = useWindowDimensions(); 
  const imageWidth = width;
  const imageHeight = (urlImg.images.downsized_large.height / urlImg.images.downsized_large.width) * imageWidth;

  return (
    <View style={{width: imageWidth, height: imageHeight}}>
        <View style={{width: '100%', height: '100%', padding: 0}}>
            <Image style={styles.image} source={{uri: urlImg.images.downsized_large.url}}/>
        </View>
        <TouchableOpacity onPress={handleClickNavigate} style={styles.closeButton}>
            <Icon style={styles.closeIcon} name="close" size={35} color="#FFFFFF" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
  },
  image: {
    width: '100%', 
    height: '100%', 
    resizeMode: 'cover'
  },
  closeButton: {
    width: '100%',
    zIndex: 3,
    position: 'absolute',
    top: 46,
    display: "flex",
    justifyContent: "center",
    paddingRight: 39,
    alignItems: "center"
  },
  closeIcon: {
    alignSelf: "flex-end",  
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 3,
    elevation: 5
  },
});

export default DetailHeader;
