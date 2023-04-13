import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import {
  Search,
} from '../components';

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#FFFFFF'},
          headerTitle: ""
        }}
      />

    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          padding: 16
        }}
      >
        <Search/>

        {/* <Popularjobs />
        <Nearbyjobs /> */}
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home;