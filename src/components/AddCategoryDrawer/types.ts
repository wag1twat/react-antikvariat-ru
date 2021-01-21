export interface ISubCategoryFormData {
  name: string
}
export interface IAddCategoryFormData {
  name: string
  subCategories: ISubCategoryFormData[]
}
export interface IAddCategoryFormProps {}
export interface IAddCategoryForm extends React.FC<IAddCategoryFormProps> {}
