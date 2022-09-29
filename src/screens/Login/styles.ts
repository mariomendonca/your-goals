import styled from 'styled-components/native'
import { fonts } from '../../global/fonts'

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.background};
`

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 40px 24px;
`

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${fonts.bold};
  color: ${({ theme }) => theme.primary};
  margin-bottom: 20px;
`

export const Subtitle = styled.Text`
  font-size: 24px;
  font-family: ${fonts.medium};
  color: ${({ theme }) => theme.secondary};
  text-align: center;
`

export const ModalContainer = styled.View`
  flex: 1;
  background: wheat;
`