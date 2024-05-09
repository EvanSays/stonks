import { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { stockApi } from '#/lib';
import { searchSymbol, getPrice } from '#/services';
import type { TickerPrice } from '#/types'

type Data = {
    description: string;
    displaySymbol: string;
    symbol: string;
}

export const TradeScreen = () => {
    const [data, setData] = useState<Data[]>([])
    const [keyword, setKeyword] = useState('');


    const handleTickerSearchOnPress = async () => {
        try {
            const res = await searchSymbol(keyword)
            setData(res)
        } catch (e) {
            console.log('error', e)
        }
    }

    const [ticker, setTicker] = useState('');
    const [stockPrice, setStockPrice] = useState<TickerPrice>({
        currPrice: "",
        change: "",
        percentChange: "",
        dayHigh: "",
        dayLow: "",
        dayOpen: "",
        prevClose: "",
    })
    const handleTickerPriceOnPress = async () => {
        try {
            const res = await getPrice(ticker)
            setStockPrice(res)
        } catch (e) {
            console.log('error', e)
        }
    }

    return (
        <View>
            <Text>Trade</Text>
            <View style={{ flexDirection: 'row', width: '100%', padding: 16 }}>
                <TextInput
                    placeholder="Search ticker" style={{ height: 50, flex: 1, borderWidth: 1 }}
                    onChangeText={setKeyword}
                />
                <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                    onPress={handleTickerSearchOnPress}
                >
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', padding: 16 }}>
                <TextInput
                    placeholder="Get stock price" style={{ height: 50, flex: 1, borderWidth: 1 }}
                    onChangeText={setTicker}
                />
                <TouchableOpacity
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                    onPress={handleTickerPriceOnPress}
                >
                    <Text>Search</Text>
                </TouchableOpacity>
            </View>
            {data.length > 0 ? data.map((stock) => {
                return (
                    <View key={stock.symbol} style={{ borderWidth: 1 }}>
                        <Text>{stock.description}</Text>
                        <Text>{stock.symbol}</Text>
                    </View>
                )
            }) : null}

            <View style={{ borderWidth: 1 }}>
                <Text>Current Price: {stockPrice.currPrice}</Text>
                <Text>Change: {stockPrice.change}</Text>
                <Text>Percent Change: {stockPrice.percentChange}</Text>
                {/* <Text>{stock.symbol}</Text> */}
            </View>

        </View>
    )
}