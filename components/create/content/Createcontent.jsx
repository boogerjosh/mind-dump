import { View, Text, TextInput, ActivityIndicator, StyleSheet } from "react-native";
import MasonryList from '@react-native-seoul/masonry-list';
import { COLORS, SIZES, FONT } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import CreateCard from "../../common/cards/create/CreateCard";
import { useState } from "react";

const CreateContent = ({handleClick}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error } = useFetch(searchTerm);

  return (
    <View>

        <View style={styles.container} >
             <TextInput
               clearButtonMode='always'
               clearTextOnFocus={true}
               value={searchTerm}
               onChangeText={(text) => setSearchTerm(text)}
               placeholder='Find a GIF'
               placeholderTextColor= '#B4B4B4'
               placeholderTextSi
               style={styles.searchInput}
             />
        </View>

        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} style={styles.loader}/>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <View style={styles.listContainer}>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingHorizontal: 16
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 16,
    marginBottom: SIZES.medium,
  },
  searchInput: {
    fontFamily: FONT.regularPoppin,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
    padding: 14,
    borderRadius: 6,
    fontSize: 16,
    backgroundColor: '#F7F7F7'
  },
  listContainer: {
    marginTop: 13,
  },
  loader: {
    marginTop: SIZES.medium,
  },
});


export default CreateContent