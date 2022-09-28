import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'
import { useTheme } from 'styled-components/native'

export function LoadingIndicator({ color, ...rest }: ActivityIndicatorProps) {
  const colors = useTheme()

  return (
    <ActivityIndicator
      color={color ?? colors.primary}
      size='large'
      {...rest}
    />
  )
}
