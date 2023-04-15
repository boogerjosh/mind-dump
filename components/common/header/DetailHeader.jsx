import { Image, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailHeader = ({handleClickNavigate, urlImg}) => {
  const { width } = useWindowDimensions(); 
  const imageWidth = width;
  const imageHeight = (urlImg.images.downsized_large.height / urlImg.images.downsized_large.width) * imageWidth;

  return (
    <View style={{width: imageWidth, height: imageHeight}}>
        <View style={{width: '100%', height: '100%', padding: 0}}>
            <Image style={{width: '100%', height: '100%', resizeMode: 'cover'}} source={{uri: urlImg.images.downsized_large.url}}/>
        </View>
        <TouchableOpacity onPress={handleClickNavigate} style={{width: '100%',
            zIndex: 3,
            position: 'absolute',
            top: -10,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            paddingRight: 16,
            alignItems: "center"}}>
            <Icon style={{alignSelf: "flex-end", elevation: 4, shadowColor: '#000000', shadowOpacity: 0, shadowRadius: 4}} name="close" size={35} color="#FFFFFF" />
        </TouchableOpacity>
    </View>
  );
};

export default DetailHeader;
