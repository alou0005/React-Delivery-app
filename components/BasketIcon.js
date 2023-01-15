import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectTotalBasket } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const BasketTotal = useSelector(selectTotalBasket);

  if (items.length === 0) return null;
  return (
    <View className="w-full absolute bottom-10 z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="items-center flex-row space-x-1 bg-[#00CCBB] rounded-lg p-4 mx-5"
      >
        <Text className=" text-lg text-white font-extrabold bg-[#01A296] py-1 px-2 ">
          {items.length}
        </Text>
        <Text className=" flex-1 text-center text-lg text-white font-extrabold  ">
          View Basket
        </Text>
        <Text className="  text-lg text-white font-extrabold ">
          <Currency quantity={BasketTotal} currency="MAD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
