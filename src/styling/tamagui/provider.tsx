import { TamaguiProvider, createTamagui, Theme } from '@tamagui/core'
import { appConfig } from './config'

interface Props {
  children: React.ReactNode
}

export const StyleProvider: React.FC<Props> = ({ children }) => {
  return (
    <TamaguiProvider config={appConfig}>
      <Theme name='dark'>
        {children}
      </Theme>
    </TamaguiProvider>
  )
}