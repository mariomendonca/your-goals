import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  value: User
}

export interface User {
  uid: string
  email: string
  name: string
  avatar: string
}

const initialUserState = { value: {} } as UserState
const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    login: (state: UserState, action: PayloadAction<User>) => {
      state.value = action.payload
    },
    logout: (state: UserState) => {
      state.value = {} as User
    }
  }
})

export const { login, logout } = userSlice.actions

export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})
