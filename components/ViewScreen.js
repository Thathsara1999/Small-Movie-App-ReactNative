import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { movies } from './MoviesDB';

export default function ViewScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Movies</Text>
      </View>
      <ScrollView style={styles.content}>
        {movies.map((movie) => (
          <View style={styles.movie} key={movie.title}>
            <Text style={styles.movieTitle}>{movie.title + " (" + movie.year + ")"}</Text>
            <View style={styles.movieRow}>
              <Text style={styles.movieLabel}>Directed by: </Text>
              <Text style={styles.movieField}>{movie.director}</Text>
            </View>
            <View style={styles.movieRow}>
              <Text style={styles.movieLabel}>Plot: </Text>
              <Text style={styles.movieField}>{movie.desc}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    flexDirection: 'column',
    padding: 8,
    gap: 32,
  },
  movie: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  movieRow: {
    flexDirection: 'row',
    gap: 2,
  },
  movieLabel: {
    fontSize: 16,
    width: '30%',
  },
  movieField: {
    fontSize: 16,
    width: '70%',
  },
});
