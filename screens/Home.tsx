import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Home = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('SlidePuzzle')}
            >
                <View style={styles.btnDiv}>
                    <Text style={styles.btnTxt}>
                        Slide Puzzle
                    </Text>
                </View>
            </TouchableOpacity>

            <View style={styles.btnDiv}>
                <Text style={styles.btnTxt}>Other</Text>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#131416'
    },
    btnDiv: {
        paddingVertical: 25,
        paddingHorizontal: 95,
        borderRadius: 5,
        backgroundColor: '#2A2D32',
        margin: 4
    },
    btnTxt: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '700'
    }
})