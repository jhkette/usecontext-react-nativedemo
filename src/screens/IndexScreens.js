import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from '../context/BlogContext';


const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  

  return (
    <View>
      <Text> Index Screen </Text>
      <Button title="add post" onPress={addBlogPost} />
      <FlatList
        data={state}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
