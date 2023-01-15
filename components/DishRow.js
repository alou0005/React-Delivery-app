import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, image, description, price }) => {
  const [isPressed, SetIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  //console.log(id);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, image, description, price }));
  };
  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity onPress={() => SetIsPressed(!isPressed)}>
        <View
          className={` flex-row bg-white border  border-gray-100 
          ${isPressed && "border-b-0"}`}
        >
          <View className="flex-1 p-4">
            <Text className=" text-base">{name}</Text>
            <Text className="text-gray-400 text-xs ">{description}</Text>
            <Text className="text-gray-400 text-xs ">
              <Currency quantity={price} currency="MAD" />
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className=" h-16 w-16 bg-gray-300 p-4 m-4 "
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row bg-white pl-4 pb-2 items-center space-x-2">
          <TouchableOpacity
            onPress={removeItemFromBasket}
            disabled={!items.length}
          >
            <MinusCircleIcon
              size={28}
              color={items.length > 0 ? "#00CCBB" : "gray"}
              opacity={items.length > 0 ? "1" : "0.3"}
            />
          </TouchableOpacity>
          <Text className="text-xs">{items.length}</Text>
          <TouchableOpacity onPress={addItemToBasket}>
            <PlusCircleIcon size={28} color={"#00CCBB"} />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default DishRow;
