import * as yup from "yup";

export const AddSubCategoriesSchema = yup.object().shape({
  subcategories: yup
    .array()
    .required()
    .of(
      yup
        .object()
        .shape({
          name: yup
            .string()
            .notOneOf([""], "Поле обязательно для заполнения")
            .required("Поле обязательно для заполнения"),
        })
        .required()
    ),
});
