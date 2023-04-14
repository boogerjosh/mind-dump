import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

// import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";
import { COLORS, FONT, SIZES } from  "../../../../constants/theme";

const PopularJobCard = ({ item, index }) => {
  const even = Number(index) % 2 === 0;
  return (
    <View
      style={{
        paddingLeft: !even ? 20 / 2: 0,
        paddingRight: even ? 16 / 2 : 0,
        paddingBottom: 16
      }}
    >
      <TouchableOpacity
        style={{
          borderColor: '#F2F2F2',
          width: '100%',
          borderWidth: 1,
          borderRadius: 9
        }}
      >
        <View style={{display: 'flex', backgroundColor: '#F6F6F6', overflow: 'hidden', borderTopLeftRadius: 9, borderTopRightRadius: 9}}>
          <Image style={{ width: '100%', resizeMode: 'cover' }} source={item.imageLink} />
        </View>

        <View style={{padding: 11, width: '100%'}}>
          <View style={{width: '100%'}}>
            <Text style={{lineHeight: 19, fontFamily: FONT.interRegular, fontSize: 16, fontWeight: 400}}>{item.text}</Text>
            <Text style={{fontSize: 8, fontFamily: FONT.regularPoppin, opacity: 0.36}}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: 'red',
    borderRadius: 1,
  },
});

export default PopularJobCard;
