import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [categories, SetCategories] = useState([]);
  useState(() => {
    sanityClient
      .fetch(
        `
        *[_type == "category"]
        `
      )
      .then((data) => {
        SetCategories(data);
      });
  }, []);
  //console.log(categories);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* categorieCard */}
      {categories?.map((cat) => (
        //console.log(cat.image),
        <CategoryCard
          key={cat._id}
          title={cat.title}
          imgUrl={urlFor(cat.image).url()}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
