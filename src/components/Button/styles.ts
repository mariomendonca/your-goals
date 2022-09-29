import styled, { css } from 'styled-components/native'
import { fonts } from '../../global/fonts'

export const Container = styled.TouchableOpacity<{
  disabled?: boolean
  mTop?: string
  mBottom?: string
}>`
  background: ${({ theme }) => theme.primary};
  width: 100%;
  height: 56px;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  margin-top: ${({ mTop}) => mTop || 0};
  margin-bottom: ${({ mBottom}) => mBottom || 0};

  ${({ disabled }) => disabled && css`
    background: ${({ theme }) => theme.gray};
  `}
`

export const Label = styled.Text`
  font-size: 20px;
  font-family: ${fonts.bold};
  color: ${({ theme }) => theme.background};
`
