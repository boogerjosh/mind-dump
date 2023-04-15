import React, {useState} from 'react'
import { View, TextInput, Image, useWindowDimensions } from "react-native";
import { SIZES, FONT } from "../../constants";

const CreateEditorContent = ({urlImg, title, setTitle, description, setDescription}) => {
  const { width } = useWindowDimensions();

  const imageWidth = width / 2;
  const imageHeight = (urlImg.images.downsized_large.height / urlImg.images.downsized_large.width) * imageWidth;

  return (
    <>  
    <View style={{width: imageWidth, height: imageHeight, marginTop: 20, borderRadius: 8}}>
        <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 8}} source={{uri: urlImg.images.downsized_large.url}}/>
    </View>

      <View>
        <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={{
                backgroundColor: '#F7F7F7',
                borderRadius: 6,
                marginTop: 20,
                fontFamily: FONT.regularPoppin,
                width: "100%",
                paddingHorizontal: SIZES.medium,
                paddingVertical: SIZES.medium,
                fontSize: 16,
            }}
            placeholder='Title'
            placeholderTextColor= '#B4B4B4'
        />
      </View>

      <View>
        <TextInput
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={{
                backgroundColor: '#F7F7F7',
                borderRadius: 6,
                marginTop: 20,
                fontFamily: FONT.regularPoppin,
                width: "100%",
                height: 416,
                paddingHorizontal: SIZES.medium,
                fontSize: 16,
                paddingTop: 15
            }}
            multiline={true}
            numberOfLines={4}
            placeholder='Dump your mind'
            placeholderTextColor= '#B4B4B4'
        />
      </View>
    </>
  )
}

export default CreateEditorContent