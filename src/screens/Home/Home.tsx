import { Button, Text, XStack, YStack } from 'styles/';
import { H2, H5, ScrollView, Separator } from 'tamagui';
import { StockNewsList } from './components/NewsList';
import { PerformanceGraph } from './components/PerformanceGraph';

export const HomeScreen: React.FC = () => {
  return (
    <ScrollView
      backgroundColor="$background"
      padding="$4"
      borderRadius="$4"
    >
      <YStack flex={1}>
        <YStack gap='$4'>
          <YStack>
            <Text fontSize='$5'>Balance</Text>
            <Text fontSize='$10'>$xxxxx</Text>
          </YStack>

          <XStack gap='$3'>
            <Button theme="active" backgroundColor='$blue4' flex={1}>Buy</Button>
            <Button theme="active" paddingHorizontal='$5' flex={1}>Sell</Button>
          </XStack>
        </YStack>
        {/* <YStack style={{ alignItems: 'flex-start', borderWidth: 1, width: '100%' }}>
          <Text>Daily Challenges</Text>
        </YStack>
        <YStack style={{ alignItems: 'flex-start', borderWidth: 1, width: '100%' }}>
          <Text>Recent Trades</Text>
        </YStack> */}
        <Separator marginVertical='$4' />
        <YStack gap='$4'>
          <PerformanceGraph />
        </YStack>
        <Separator marginVertical='$4' />
        <YStack gap='$4'>
          <StockNewsList />
        </YStack>
      </YStack>
    </ScrollView>
  )
}