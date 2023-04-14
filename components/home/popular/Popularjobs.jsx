import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import MasonryList from '@react-native-seoul/masonry-list';

import styles from "./popularjobs.style";
import { COLORS, SIZES, images } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();
  // const { data, isLoading, error } = useFetch("search", {
  //   query: "React developer",
  //   num_pages: "1",
  // });

  // const [selectedJob, setSelectedJob] = useState();

  // const handleCardPress = (item) => {
  //   router.push(`/job-details/${item.job_id}`);
  //   setSelectedJob(item.job_id);
  // };
  const list = [
    {
      id: "1",
      text: "Tired.",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/cat.png')
    },
    {
      id: "2",
      text: "Going to the park Today",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/people.gif')
    },
    {
      id: "3",
      text: "blablabla1",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/people.png')
    },
    {
      id: "4",
      text: "blablabla2",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/people.png')
    },
    {
      id: "5",
      text: "blablabla1",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/cat.gif')
    },
    {
      id: "6",
      text: "blablabla2",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/people.png')
    },
    {
      id: "7",
      text: "blablabla1",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/cat.png')
    },
    {
      id: "8",
      text: "blablabla2",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/people.png')
    },
    {
      id: "9",
      text: "blablabla1",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/cat.png')
    },
    {
      id: "10",
      text: "blablabla2",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/people.png')
    },
    {
      id: "11",
      text: "blablabla1",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/cat.png')
    },
    {
      id: "12",
      text: "blablabla2",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/people.png')
    },
    {
      id: "13",
      text: "blablabla1",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/cat.png')
    },
    {
      id: "14",
      text: "blablabla2",
      date: "January 24th 2023",
      imageLink: require('../../../assets/images/people.png')
    }
  ]

  return (
    <View style={styles.container}>
        <MasonryList
          data={list}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item, i}) => <PopularJobCard item={item} index={i} />}
          refreshing={false}
        />
        {/* {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )} */}
    </View>
  );
};

export default Popularjobs;
