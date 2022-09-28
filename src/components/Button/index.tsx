import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components'
import { LoadingIndicator } from '../LoadingIndicator'
import { Container, Label } from './styles'

export interface ButtonProps extends TouchableOpacityProps {
  label: string
  isLoading?: boolean
  disabled?: boolean
}

export function Button({ label, isLoading, disabled, ...rest }: ButtonProps) {
  const colors = useTheme()
  return (
    <Container
      activeOpacity={0.4}
      disabled={isLoading || disabled}
      {...rest}
    >
      {!isLoading ? (
        <Label>{label}</Label>
      ) : (
        <LoadingIndicator color={colors.background} />
      )}
    </Container>
  )
}
