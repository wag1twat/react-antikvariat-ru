import * as yup from "yup";

export const AddSubCategoriesSchema = yup.object().shape({
  subCategories: yup
    .array()
    .notRequired()
    .of(
      yup.object().shape({
        name: yup
          .string()
          .notOneOf([""], "Поле обязательно для заполнения")
          .required("Поле обязательно для заполнения"),
      })
    ),
});
