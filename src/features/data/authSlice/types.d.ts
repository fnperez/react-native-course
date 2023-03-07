export type AuthState = {
  loggedUser?: {
    email: string,
    password: string,
    createdAt: number
  }
}

export type Credentials = {
  email: string
  password: string
}