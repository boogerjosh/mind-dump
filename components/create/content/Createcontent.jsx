import { Image, View, Text, TextInput, ActivityIndicator, StyleSheet } from "react-native";
import MasonryList from '@react-native-seoul/masonry-list';
import { COLORS, icons, images, SIZES, FONT } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import CreateCard from "../../common/cards/create/CreateCard";
import { useState, useEffect } from "react";
// import { GiphySDK } from '@giphy/react-native-sdk';

const CreateContent = ({handleClick}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error } = useFetch();
  console.log(searchTerm);
  return (
    <View>

        <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          paddingHorizontal: 16
        }}>
             <TextInput
               clearButtonMode='always'
               clearTextOnFocus={true}
               style={{fontFamily: FONT.regularPoppin,
               width: "100%",
               height: "100%",
               paddingHorizontal: SIZES.medium,
               padding: 14,
               borderRadius: 6,
               fontSize: 16,
               backgroundColor: '#F7F7F7'}}
               value={searchTerm}
               onChangeText={(text) => setSearchTerm(text)}
               placeholder='Find a GIF'
               placeholderTextColor= '#B4B4B4'
               placeholderTextSi
             />
        </View>

        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} style={{marginTop: SIZES.medium}}/>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <View style={{marginTop: 13}}>
              <MasonryList
                data={data}
                keyExtractor={item => item.id}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                renderItem={({item, i}) => <CreateCard numColumns={3} item={item} index={i} handleClick={handleClick} />}
                refreshing={false}
              />
          </View>
            
        )}


    </View>
  )
}

const styles = StyleSheet.create({

});

export default CreateContent