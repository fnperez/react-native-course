import { useCallback } from 'react'
import { email as emailValidator, length, required, validateForm } from 'redux-form-validators'
import { register } from '../../features/data/authSlice/actions'
import { useAppDispatch } from '../../store'
import type { Credentials } from '../../features/data/authSlice/types'
import { Alert } from 'react-native'

const useRegister = () => {
  const dispatch = useAppDispatch()

  const onSubmit = useCallback(async ({ email, password }: Credentials) => {
    const promise = dispatch(register({ email, password }))

    try {
      const user = await promise.unwrap()

      Alert.alert('Success!', `User ${user?.email} was created.`)
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