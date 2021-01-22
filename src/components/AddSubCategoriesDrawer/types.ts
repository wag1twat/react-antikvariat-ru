import { ModalProps } from "@chakra-ui/react";

export interface IAddSubCategoryFormData {
  name: string;
}
export interface IAddSubCategoriesFormData {
  subcategories: IAddSubCategoryFormData[];
}
export interface IAddSubCategoriesDrawerProps {
  categoryId: string;
  onClose: ModalProps["onClose"];
  isOpen: ModalProps["isOpen"];
}
export interface IAddSubCategoriesDrawer
  extends React.FC<IAddSubCategoriesDrawerProps> {}
