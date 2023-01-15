import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
//import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";
import {
  SparklesIcon,
  BeakerIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/solid";
import { UserIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import FeaturedRestaurant from "../components/FeaturedRestaurant";
import SanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerShown: false,
      },
      []
    );
  });
  useEffect(() => {
    SanityClient.fetch(
      `
        *[_type == 'featured']{
              ...,
              restaurants[]->{
                ...,
                type->{
                    title,
                  }
              },

           
          }`
    ).then((data) => {
      setFeaturedCategories(data);
    });
  }, []);
  //console.log(featuredCategories);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}

      <View className=" flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400">Deliver Now!</Text>
          <Text className=" text-red-600 font-bold text-xl">
            Current Location
            <ChevronDownIcon color="" fill="#00CCBB" size={20} />
          </Text>
        </View>
        <UserIcon color="#00CCBB" size={24} />
      </View>
      {/* Search */}
      <View className=" flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2">
          <MagnifyingGlassIcon color={"gray"} className=" " />
          <TextInput
            placeholder="Cuisines & Restaurants"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} className=" " />
      </View>
      {/* content */}
      <ScrollView className=" mb-36">
        {/* categories */}
        <Categories />

        {/* features */}
        {featuredCategories?.map((category) => (
          //console.log(category.name),

          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
