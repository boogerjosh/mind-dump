import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";

import { COLORS, SIZES, FONT } from "../constants";
import {
  NewGIFS,
  Header,
} from "../components";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  const handleNavigate = () => {
    router.push(`/create`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      
      <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>
            <Icon name="plus" size={16} color="#000000" />
          </Text>
          <Text style={styles.buttonLabel}>MindDump</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </View>
        <NewGIFS searchTerm={searchTerm} />
      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    position: 'relative',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#CCFF00',
    paddingHorizontal: 40,
    paddingVertical: 20,
    bottom: 30,
    right: 23,
    borderRadius: 55,
    textAlign: 'center',
  },
  buttonText: {
    marginRight: 4,
  },
  buttonLabel: {
    fontFamily: FONT.mediumPoppin,
    fontWeight: 600,
    textAlign: 'center',
    fontSize: 16
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: SIZES.medium,
  },
});

export default Home;
