import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { movies } from './MoviesDB';

export default function AddScreen() {
  const [movie, setMovie] = useState({
    title: '',
    year: '',
    director: '',
    desc: ''
  });

  const handleChange = (field, value) => {
    setMovie({ ...movie, [field]: value });
  };

  const handleAddMovie = () => {
    movies.push(movie);
    setMovie({ title: '', year: '', director: '', desc: '' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add a movie</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.inputField}>
          <Text style={styles.inputLabel}>Title: </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(value) => handleChange('title', value)}
            value={movie.title}
            placeholder="Movie Title"
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.inputLabel}>Year: </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(value) => handleChange('year', value)}
            value={movie.year}
            placeholder="Released Year"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.inputLabel}>Director: </Text>
          <TextInput
            style={styles.inputBox}
            onChangeText={(value) => handleChange('director', value)}
            value={movie.director}
            placeholder="Director"
          />
        </View>
        <View style={styles.inputField}>
          <Text style={styles.inputLabel}>Description: </Text>
          <TextInput
            multiline
            numberOfLines={5}
            style={styles.inputBox}
            onChangeText={(value) => handleChange('desc', value)}
            value={movie.desc}
            placeholder="Movie Description"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleAddMovie}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 32,
  },
  button: {
    width: '50%',
    backgroundColor: 'black',
    paddingVertical: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  inputField: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 32,
  },
  inputLabel: {
    width: '20%',
  },
  inputBox: {
    flexGrow: 1,
    height: 48,
    margin: 8,
    borderWidth: 1,
    padding: 16,
  },
});
