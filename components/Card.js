import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Card({
    name,
    picture
}) {

  return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{
            uri: picture,
          }}
        />
        <Text style={styles.title}>{name}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Meet</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#00000030',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    color: '#181818',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  image: {
    width: '100%',
    height: 230,
    borderRadius: 6,
  },
  button: {
    backgroundColor: '#000',
    width: '100%',
    height: 35,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});
