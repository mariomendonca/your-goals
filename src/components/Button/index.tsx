import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components'
import { LoadingIndicator } from '../LoadingIndicator'
import { Container, Label } from './styles'

export interface ButtonProps extends TouchableOpacityProps {
  label: string
  isLoading?: boolean
  disabled?: boolean
  mTop?: string
  mBottom?: string
}

export function Button({ label, isLoading, disabled, mBottom, mTop, ...rest }: ButtonProps) {
  const colors = useTheme()
  return (
    <Container
      mTop={mTop}
      mBottom={mBottom}
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
