import { useCallback } from 'react'
import { email, length, required, validateForm } from 'redux-form-validators'

const useRegister = () => {
  const onSubmit = useCallback(() => {
    console.log('SUBMITTING...')
  }, [])

  const validate = validateForm({
    email: [required(), email()],
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
