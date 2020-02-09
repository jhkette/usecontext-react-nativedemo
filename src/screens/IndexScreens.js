import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const blogPosts = useContext(BlogContext);
    
    return (
      <View>
      <Text> Index Screen </Text>
      <FlatList 
        data = {blogPosts}
        renderItem = {({ item }) => {
          return <Text>{item.title}</Text>;
          }}
        keyExtractor={(item) => item.title}
      />
      </View>
    );
  }
   
  export default IndexScreen;

const styles = StyleSheet.create({

})
