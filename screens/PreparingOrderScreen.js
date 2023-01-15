import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { HeartIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center">
      <View>
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{ textAlign: "center" }}
        >
          <Text className="text-center font-bold text-lg text-white">
            Preparing Order...
          </Text>
        </Animatable.Text>
        <Progress.Bar progress={0.7} width={200} />
        <Animatable.Image
          source={require("../assets/spongBob.gif")}
          animation="slideInDown"
          iterationCount={5}
          direction="alternate"
          className=" w-52 h-52"
        />

        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={{ textAlign: "center" }}
        >
          <HeartIcon size={36} />
        </Animatable.Text>
      </View>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
