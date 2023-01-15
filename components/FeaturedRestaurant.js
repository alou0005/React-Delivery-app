import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { RNSVGSymbol } from "react-native-svg";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const FeaturedRestaurant = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", { props });
      }}
      className="bg-white space-x-2 mr-2 shadow-sm shadow-gray-200  rounded-tl-sm rounded-tr-sm mb-2 pb-3 "
    >
      <View className="pb-2">
        <Image
          source={{ uri: urlFor(props.imgUrl).url() }}
          className=" h-36 w-56 rounded-tl-sm rounded-tr-sm"
        />
      </View>
      <View>
        <Text className=" font-bold text-sm">{props.name}</Text>
      </View>
      <View className="flex-row items-center space-x-1">
        <StarIcon size={12} color={"#FAC541"} />
        <Text className=" font-extralight text-xs">{props.rating}</Text>
      </View>
      <View className="flex-row items-center space-x-1">
        <MapPinIcon size={12} color={"#FAC541"} />

        <Text className=" font-extralight text-xs">{props.location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedRestaurant;
