import { useCallback } from 'react'
import { Alert } from 'react-native'
import { email, required, validateForm } from 'redux-form-validators'
import { useAppDispatch } from '@/src/store'
import { login } from '@/src/features/data/authSlice/actions'
import type { Credentials } from '@/src/features/data/authSlice/types.d'

const useLogin = () => {
  const dispatch = useAppDispatch()

  const onSubmit = useCallback(async (credentials: Credentials) => {
    const promise = dispatch(login(credentials))

    try {
      promise.unwrap()
    } catch (err: string | any) {
      Alert.alert('Error!', err)
    }
  }, [])

  const formValidator = validateForm({
    email: [required(), email()],
    password: [required()],
  })

  return {
    onSubmit,
    formValidator,
  }
}
export default useLogin
