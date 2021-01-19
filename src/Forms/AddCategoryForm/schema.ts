import * as yup from 'yup'

export const AddCategorySchema = yup.object().shape({
  name: yup
    .string()
    .transform((value) => {
      console.log(value)
      return value
    })
    .nullable(false)
    .notOneOf([''], 'Поле обязательно для заполнения')
    .required('Поле обязательно для заполнения'),
})
