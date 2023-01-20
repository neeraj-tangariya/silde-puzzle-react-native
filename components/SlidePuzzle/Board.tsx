import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { BOARD_SIZE, GRID_SIZE, TILE_COUNT } from '../../utils/constants'
import { canSwap, isSolved, shuffle, swap } from '../../utils/slide-puzzle'
import Tile from './Tile'

type BoardProps = {
    imgUrl: string
}

const Board = ({ imgUrl }: BoardProps) => {
    const [tiles, setTiles] = useState<Array<number>>([...Array(TILE_COUNT).keys()]);

    const [isStarted, setIsStarted] = useState<boolean>(false);

    const [moves, setMoves] = useState<number>(0);

    console.log("is started:", isStarted);

    const shuffleTiles = () => {
        const shuffledTiles: any[] = shuffle(tiles);
        setTiles(shuffledTiles);
    };

    const swapTiles = (tileIndex: number) => {
        if (canSwap(tileIndex, tiles.indexOf(tiles.length - 1))) {
            const swappedTiles = swap(
                tiles,
                tileIndex,
                tiles.indexOf(tiles.length - 1)
            );
            setTiles(swappedTiles);
            setMoves((prevMove) => prevMove + 1);
        }
    };

    const handleTileClick = (index: number) => {
        if (!isSolved(tiles)) {
            swapTiles(index);
        } else {
            console.log("shuffled puzzle first, selected tile index is", index);
        }
    };

    const handleShuffleClick = () => {
        shuffleTiles();
        setMoves(0);
    };

    const handleStartClick = () => {
        shuffleTiles();
        setIsStarted(true);
    };

    const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
    const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
    const style = {
        width: BOARD_SIZE,
        height: BOARD_SIZE,
    };

    const hasWon = isSolved(tiles);

    return (
        <>
            <View>
                <Text>Moves: {moves}</Text>
            </View>
            <View style={[style, styles.board]}>
                {tiles.map((tile: number, index: number) => (
                    <Tile
                        key={tile}
                        index={index}
                        imgUrl={imgUrl}
                        tile={tile}
                        width={pieceWidth}
                        height={pieceHeight}
                        handleTileClick={handleTileClick}
                        isSolved={hasWon}
                    />
                ))}
            </View>
            {hasWon && isStarted && <View><Text>Puzzle solved 🧠 🎉</Text></View>}
            {!isStarted ? (
                <Button title="Start game" onPress={() => handleStartClick()} />
            ) : (
                <Button title="Restart game" onPress={() => handleShuffleClick()} />
            )}
        </>
    )
}

export default Board

const styles = StyleSheet.create({
    board: {
        position: 'relative',
    }
})