import { ReactNode } from 'react'
import { TextInputProps, TouchableOpacity } from 'react-native'
import { Container, InputText } from './styles'

export interface InputProps extends TextInputProps {
  Icon?: ReactNode
  onIconPress?: () => void
  mBottom?: string
  mTop?: string
}

export function Input({ Icon, onIconPress, mBottom, mTop, ...rest }: InputProps) {
  return (
    <Container mTop={mTop} mBottom={mBottom}>
      <InputText {...rest} />
      {Icon && (
        <TouchableOpacity onPress={onIconPress} style={{ marginLeft: 15 }}>
          {Icon}
        </TouchableOpacity>
      )}
    </Container>
  )
}