import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { getMatrixPosition, getVisualPosition } from '../../utils/slide-puzzle'
import { BOARD_SIZE, GRID_SIZE, TILE_COUNT } from '../../utils/constants'
import { Animated } from 'react-native'

type TileProps = {
  tile: number,
  index: number,
  width: number,
  height: number,
  handleTileClick: any,
  imgUrl?: string,
  isSolved: boolean,
}

const Tile = (props: TileProps) => {
  const { tile, index, width, height, handleTileClick, imgUrl, isSolved } = props;

  const { row, col } = getMatrixPosition(index);

  const visualPos = getVisualPosition(row, col, width, height);

  const tileStyle = {
    width,
    height,
    translateX: visualPos.x,
    translateY: visualPos.y,
    // backgroundImage: `url(${imgUrl})`,
    // backgroundSize: `${BOARD_SIZE}px`,
    // backgroundPosition: `${(100 / (GRID_SIZE - 1)) * (tile % GRID_SIZE)}% ${(100 / (GRID_SIZE - 1)) * Math.floor(tile / GRID_SIZE)
    //   }%`,
  };

  const opacity = tile === TILE_COUNT - 1 ? (isSolved ? 1 : 0) : 1

  return (
    <Pressable onPress={() => handleTileClick(index)}>
      <View
        style={[
          tileStyle,
          styles.tile,
          {
            transform: [{ translateX: visualPos.x }, { translateY: visualPos.y }],
            opacity,
          },
        ]}>
        <Text style={styles.tileTxt}>
          {tile + 1}
        </Text>
      </View>
    </Pressable>
  )
}

export default Tile

const styles = StyleSheet.create({
  tile: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#9c9493ea',
  },
  tileTxt: {
    fontSize: 20,
    fontWeight: '400'
  }
})