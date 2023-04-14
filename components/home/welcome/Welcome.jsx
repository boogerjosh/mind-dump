import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
import Icon from 'react-native-vector-icons/FontAwesome';

const jobTypes = ["Full-time", "Part-time", "Contractor"];

const Welcome = ({ searchTerm, setSearchTerm }) => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setShowSearch(!showSearch);
    setSearchTerm('');
  }
  
  return (
    <View>
      <View style={styles.searchContainer}>
      {!showSearch ? (
       <>
        <Text style={styles.headerText}>
          Mind<Text style={styles.boldText}>Dump</Text>
        </Text>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          {/* <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          /> */}
          {/* <Text style={styles.searchBtnImage}> */}
            <Icon style={styles.searchBtnImage} name="search" size={20} color="#000000" />
          {/* </Text> */}
        </TouchableOpacity>
       </> 
      ) : (
        <>
        <View style={styles.searchWrapper}>
          <TextInput
            clearButtonMode='always'
            clearTextOnFocus={true}
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='Search'
            placeholderTextColor= '#B4B4B4'
            placeholderTextSi
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Text style={styles.searchBtnImage}>
            <Icon name="close" size={20} color="#000000" />
          </Text>
        </TouchableOpacity>
        </>
      )}
      </View>
    </View>
  );
};

export default Welcome;