import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <>
      <Text style={styles.label}>Enter title </Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => settitle(text)}
      />
      <Text style={styles.label}>Enter title </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setcontent(text)}
      />
      <Button
        title="Add blog post"
        onPress={() =>
          addBlogPost(title, content, () => navigation.navigate("Index"))
        }
      />
    </>
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
  

export default BlogPostForm;
