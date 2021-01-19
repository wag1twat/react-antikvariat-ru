export interface ICategoryItemFromRequest {
  id: string // uuidv4
  name: string
}
export interface ICategoryItem extends React.FC<ICategoryItemFromRequest> {}
export interface ICategories extends React.FC {}
