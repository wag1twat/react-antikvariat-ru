import { IAddSubCategoryFormData } from "components/AddSubCategoriesDrawer/types";
import { ISubCategoryItemFromRequest } from "types/components/Categories";

export interface ResponseGetSubcategories {
  subcategories: ISubCategoryItemFromRequest[];
  success: boolean;
}
