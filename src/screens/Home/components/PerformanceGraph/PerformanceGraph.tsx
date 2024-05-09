import React from "react";
import { Text } from "styles/";
import { LineGraph, GraphPoint } from 'react-native-graph'
import { H3, YStack } from "tamagui";
import { StyleSheet } from "react-native";

function generateSinusGraphData(length: number): GraphPoint[] {
    return Array<number>(length)
        .fill(0)
        .map((_, index) => ({
            date: new Date(index),
            value: Math.sin(index),
        }))
}

export const PerformanceGraph: React.FC = () => {
    const SMALL_POINTS = generateSinusGraphData(9)
    const points: GraphPoint[] = [
        {
          date: new Date(2024, 1, 1),
          value: 10,
        },
        {
          date: new Date(2024, 2, 1),
          value: 100,
        },
        {
          date: new Date(2024, 3, 1),
          value: 115,
        },
        {
          date: new Date(2024, 4, 1),
          value: 200,
        },
        {
          date: new Date(2024, 5, 1),
          value: 50,
        },
        {
          date: new Date(2024, 6, 1),
          value: 20,
        },
      ];
    return (
        <YStack gap='$3'>
            <H3>Performance</H3>
            <LineGraph
                style={styles.miniGraph}
                animated={false}
                color='#eee'
                points={SMALL_POINTS}
            />
        </YStack>

    )
}

const styles = StyleSheet.create({
    miniGraph: {
        width: '100%',
        height: 100,
        marginLeft: 5,
      },
})