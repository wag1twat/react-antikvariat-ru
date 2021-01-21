import { ISubCategoryFormData } from 'components/AddCategoryDrawer/types'

export interface ICategoryItemFromRequest {
  id: string // uuidv4
  name: string
  subCategories: ISubCategoryFormData[] | null
}
export interface ICategoryItem extends React.FC<ICategoryItemFromRequest> {}
export interface ICategories extends React.FC {}
