import { ModalProps } from "@chakra-ui/react";

export interface IAddCategoryFormData {
  name: string;
}
export interface IAddCaregoryDrawerProps {
  onClose: ModalProps["onClose"];
  isOpen: ModalProps["isOpen"];
}
export interface IAddCategoryDrawer extends React.FC<IAddCaregoryDrawerProps> {}
