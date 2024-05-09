import { GetProps, styled } from '@tamagui/core'
import { Text as TText } from 'tamagui'


export const Text = styled(TText, {
    name: 'Text', // useful for debugging, and Component themes
})
  
export type TextProps = GetProps<typeof TText>