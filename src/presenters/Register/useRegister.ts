import { useCallback } from 'react'
import { Alert } from 'react-native'
import {
  email as emailValidator,
  length,
  required,
  validateForm,
} from 'redux-form-validators'
import { useAppDispatch } from '@/src/store'
import { register } from '@/src/features/data/authSlice/actions'
import type { Credentials } from '@/src/features/data/authSlice/types'

const useRegister = () => {
  const dispatch = useAppDispatch()

  const onSubmit = useCallback(async ({ email, password }: Credentials) => {
    const promise = dispatch(register({ email, password }))

    try {
      await promise.unwrap()

      // TODO: REDIRECT TO LIST
    } catch (err: string | any) {
      Alert.alert('Error!', err)
    }
  }, [])

  const validate = validateForm({
    email: [required(), emailValidator()],
    password: [required(), length({ minimum: 8 })],
    confirm: [
      (confirmPassword: string, form: [{ password: string }]) =>
        confirmPassword === form[0].password
          ? null
          : "doesn't match `Password`",
    ],
  })

  return {
    onSubmit,
    validate,
  }
}

export default useRegister
