import { useEffect, useState } from 'react';
import { Text } from "styles/"
import { getNews } from '#/services';
import { Button, Card, H3, H5, Paragraph, XStack } from 'tamagui'
import { unixTimeFromNow } from '#/lib/dayjs';

export interface Article {
    category: string;
    datetime: number;
    headline: string;
    id: number;
    image: string;
    related: string;
    source: string;
    summary: string;
    url: string;
}

export const StockNewsList: React.FC = () => {
    const [newsData, setNewsData] = useState<Article[] | []>([])

    useEffect(() => {
        async function fetchNews() {
            const data = await getNews();
            setNewsData(data)
        }
        fetchNews()
    }, [])

    return (
        <>
            <H3>Latest News</H3>
            {newsData.slice(0, 3).map(article => {
                const { source, headline, datetime, id } = article;
                return (
                    <Card key={id} elevate size="$4" bordered>
                        <Card.Header padded>
                            <H5>{source}</H5>
                            <Paragraph>{headline}</Paragraph>
                        </Card.Header>
                        <Card.Footer padded>
                            <XStack flex={1} justifyContent='space-between' alignItems='flex-end'>
                                <Text>{unixTimeFromNow(datetime)}</Text>
                                {/* <Button borderRadius="$10">Purchase</Button> */}
                            </XStack>
                        </Card.Footer>
                    </Card>
                )
            })}
        </>

    )
}

