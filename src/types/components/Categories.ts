export interface ICategoryItemFromRequest {
  id: string; // uuidv4
  name: string;
}

export interface ISubCategoryItemFromRequest {
  id: string; // uuidv4
  name: string;
}

export interface ICategoryItemProps extends ICategoryItemFromRequest {
  index: number;
  deleteCategory: (id: string) => void;
  isLoading: boolean;
}
export interface ICategoryItem extends React.FC<ICategoryItemProps> {}
export interface ICategories extends React.FC {}
