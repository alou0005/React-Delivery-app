import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import sanityClient from "../sanity";
import FeaturedRestaurant from "./FeaturedRestaurant";

const FeaturedRow = (props) => {
  const [restaurantCard, SetRestaurantCard] = useState([]);
  useState(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured' && _id==$id]{
                ...,  
         restaurants[]->{
           ...,
           dishes[]->,
           type->{
            title,
           }
                    
         }
        
       }[0]`,
        { id: props.id }
      )
      .then((data) => SetRestaurantCard(data?.restaurants));
  }, []);
  //console.log("===>", restaurantCard);
  return (
    <View>
      <View className="items-center flex-row">
        <View className="flex-1  p-4">
          <Text className="font-bold">{props.title}</Text>
          <Text className=" font-light text-xs text-gray-500 ">
            {props.description}
          </Text>
        </View>
        <View className="p-4">
          <ArrowRightIcon color={"#00CCBB"} size={20} />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingTop: 10,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {restaurantCard?.map((resto) => (
          <FeaturedRestaurant
            key={resto._id}
            id={resto._id}
            name={resto.name}
            lat={resto.lat}
            long={resto.long}
            rating={resto.rating}
            location={resto.address}
            imgUrl={resto.image}
            type={resto.type.title}
            short_description={resto.short_description}
            dishes={resto.dishes}
            //imgUrl="https://media-cdn.tripadvisor.com/media/photo-s/1a/51/df/c0/mcdonald-s.jpg"
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
