import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useRoute } from '@react-navigation/native';

import styles from "./header.style";
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  const route = useRoute();
  let currenRoute = route.name;

  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setShowSearch(!showSearch);
    setSearchTerm('');
  }

  const handleClickBack = () => {
    if (currenRoute === 'create') {
      router.push(`/home`);
    } else {
      router.push(`/create`);
    }
  }
  
  return (
    <View>
      <View style={styles.searchContainer}>
      {currenRoute !== 'home' ? (
        <>
        <Text style={styles.headerTextCrete}>
          Create Mind<Text style={styles.boldText}>Dump</Text>
        </Text>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClickBack}>
            <Icon style={styles.searchBtnImage} name="close" size={24} color="#000000" />
        </TouchableOpacity>
     </>
      ) : (
        !showSearch ? (
          <>
           <Text style={styles.headerText}>
             Mind<Text style={styles.boldText}>Dump</Text>
           </Text>
           <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
               <Icon style={styles.searchBtnImage} name="search" size={20} color="#000000" />
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
         )
      )}
      </View>
    </View>
  );
};



export default Header;
