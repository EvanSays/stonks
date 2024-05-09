import { stockApi } from "#/lib";
import type { Data, TickerPrice } from '#/types';
import { ApiError } from './apiError';

const filterOutPeriods = (data: Data[]) => {
    return data.filter(stock => {
        return !stock.symbol.includes('.')
    })
}

export const searchSymbol = async (keyword: string) => {
    try {
        const res = await stockApi.get(`/search?q=${keyword}`)
        const filtered = filterOutPeriods(res.data.result)
        return filtered
    } catch (error) {
        if (error instanceof ApiError) {
            throw error
        } else {
            throw new ApiError('An unexpected error occurred', 500);
        }
    }
}

export const getPrice = async (ticker: string) => {
    try {
        const res = await stockApi.get(`/quote?symbol=${ticker.toUpperCase()}`)
        const { c, d, dp, h, l, o, pc } = res.data;

        return {
            currPrice: c,
            change: d,
            percentChange: dp,
            dayHigh: h,
            dayLow: l,
            dayOpen: o,
            prevClose: pc
        } as TickerPrice
    } catch (error) {
        if (error instanceof Error) {
            throw error
        } else {
            throw new ApiError('An unexpected error occurred', 500);
        }
    }
}

export const getNews = async () => {
    try {
        const res = await stockApi.get('/news?category=general')
        return res.data
    } catch(error) {
        if(error instanceof ApiError) {
            throw error
        } else {
            throw new ApiError('An unexpected error occurred', 500);
        }
    }
}