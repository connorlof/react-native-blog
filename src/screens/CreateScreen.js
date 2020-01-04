import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View>
            <Text style={styles.labelStyle}>Title</Text>
            <TextInput style={styles.inputStyle} value={title} onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.labelStyle}>Content</Text>
            <TextInput style={styles.inputStyle} value={content} onChangeText={(text) => setContent(text)}/>
            <Button title="Add Blog Post" />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 16,
        padding: 8,
        margin: 8
    },
    labelStyle: {
        fontSize: 20,
        marginBottom: 4,
        marginLeft: 8
    }
});

export default CreateScreen;