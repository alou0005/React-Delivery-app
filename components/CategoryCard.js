import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const CategoryCard = (props) => {
  return (
    <TouchableOpacity className=" relative mr-2 ">
      <Image source={{ uri: props.imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bg-zinc-500 bottom-1 left-1 text-white font-bold from-neutral-300">
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
