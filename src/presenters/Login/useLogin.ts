import { useCallback } from 'react'
import { Alert } from 'react-native'
import { useAppDispatch } from '../../store'
import { login } from '../../features/data/authSlice/actions'
import { email as emailValidator, length, required, validateForm } from 'redux-form-validators'
import type { Credentials } from '../../features/data/authSlice/types'

const useLogin = () => {
  const dispatch = useAppDispatch()

  const onSubmit = useCallback(async ({ email, password }: Credentials) => {
    const promise = dispatch(login({ email, password }))

    try {
      const user = await promise.unwrap()
      Alert.alert('Login!', `User ${user?.email} logged in.`)
    } catch (err: string | any) {
      Alert.alert('Error!', err)
    }
  }, [])

  const validate = validateForm({
    email: [required(), emailValidator()],
    password: [required()],
  })

  return {
    onSubmit,
    validate,
  }
}

export default useLogin