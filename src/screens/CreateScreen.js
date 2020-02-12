import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput
 
} from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {

  const {addBlogPost} = useContext(Context)
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  return (
    <View>
      <Text style={styles.label}>Enter title </Text>
      <TextInput style={styles.input} value={title} onChangeText={text => settitle(text)} />
      <Text style={styles.label}>Enter title </Text>
      <TextInput style={styles.input} value={content} onChangeText={text => setcontent(text)} />
      <Button title="Add blog post" onPress={()=> addBlogPost(title, content, () => navigation.navigate('Index')) }/>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
      fontSize: 18,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 15,
      padding: 5,
      margin: 5
  },
  label: {
      fontSize: 20,
      marginBottom: 5,
      marginLeft: 5
  }
});

export default CreateScreen;
