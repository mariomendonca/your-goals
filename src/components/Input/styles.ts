import styled from 'styled-components/native'

export const Container = styled.View<{ mTop?: string, mBottom?: string }>`
  width: 100%;
  height: 56px;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ mTop}) => mTop || 0};
  margin-bottom: ${({ mBottom}) => mBottom || 0};
`

export const InputText = styled.TextInput`
  flex: 1;
  height: 100%;
  font-size: 18px;
`
