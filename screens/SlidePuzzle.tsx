import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Board from '../components/SlidePuzzle/Board';
import { useWindowDimensions } from 'react-native';


const SlidePuzzle = () => {
  const [imgUrl, setImgUrl] = useState<string>("https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3");

  const handleImageChange = (e: any) => {
    setImgUrl(e);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>
        React sliding puzzle
      </Text>
      <Board imgUrl={imgUrl} />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={handleImageChange}
          value={imgUrl}
        />
      </View>
    </View>
  )
}

export default SlidePuzzle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 90
  },
})