import { GetProps, View, styled } from '@tamagui/core'
import { Button as TButton } from 'tamagui'


export const Button = styled(TButton, {
    name: 'Button', // useful for debugging, and Component themes
})
  
export type ButtonProps = GetProps<typeof TButton>