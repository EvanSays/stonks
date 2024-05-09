import { GetProps, styled } from '@tamagui/core'
import { XStack as TXStack, YStack as TYStack, ZStack as TZStack } from 'tamagui'


export const XStack = styled(TXStack, {
    name: 'XStack',
})
  
export type XStackProps = GetProps<typeof TXStack>


export const YStack = styled(TYStack, {
    name: 'YStack',
})
  
export type YStackProps = GetProps<typeof TYStack>

export const ZStack = styled(TZStack, {
    name: 'ZStack',
})
  
export type ZStackProps = GetProps<typeof TZStack>