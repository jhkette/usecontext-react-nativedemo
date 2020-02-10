import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(Context);
  

  return (
    <View>
      <Text> Index Screen </Text>
      <Button title="add post" onPress={addBlogPost} />
      <FlatList
        data={state}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
          <Feather style={styles.icon} name="trash" />
          </TouchableOpacity>
          )
        }}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
   
    borderColor: 'gray'
  },
  title:{
    fontSize: 18
  },
  icon: {
    fontSize: 24
  }
});
