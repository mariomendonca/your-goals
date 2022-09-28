export const lightMode = {
  text: '#0d0a0b',
  textLight: '#454955',
  background: '#f3eff5',
  primary: '#72b01d',
  secondary: '#3f7d20'
}

const darkMode = {
  text: '#0d0a0b',
  textLight: '#454955',
  background: '#f3eff5',
  primary: '#72b01d',
  secondary: '#3f7d20'
}

export const colors = (theme?: string) => theme === 'light' ? lightMode : darkMode
