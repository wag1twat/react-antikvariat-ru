import * as yup from 'yup'

export const AddCategorySchema = yup.object().shape({
  name: yup
    .string()
    .notOneOf([''], 'Поле обязательно для заполнения')
    .required('Поле обязательно для заполнения'),
  subCategories: yup
    .array()
    .notRequired()
    .of(
      yup.object().shape({
        name: yup
          .string()
          .notOneOf([''], 'Поле обязательно для заполнения')
          .required('Поле обязательно для заполнения'),
      }),
    ),
})
