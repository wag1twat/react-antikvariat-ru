import { Accordion, Stack } from "@chakra-ui/react";
import { useGet } from "api/useGet";
import React from "react";
import { margin, spacing } from "utils/styles";
import CategoryItem from "./CategoryItem";
import {
  ICategories,
  ICategoryItemFromRequest,
} from "types/components/Categories";
import { usePolling } from "hooks/usePolling";
import CategoriesHeader from "./CategoriesHeader";
import { useRemove } from "api/useRemove";

const Categories: ICategories = () => {
  const { get, result: resultGetCategories, isLoading } = useGet<{
    categories: ICategoryItemFromRequest[] | null;
  } | null>("/categories", {});

  const {
    remove,
    result: resultRemoveCategory,
    isLoading: isLoadingRemoveCategory,
  } = useRemove(`/category`, {});

  usePolling(true, get, null);

  const deleteCategory = React.useCallback(
    (id: string) => {
      remove({ id }).then(() => {
        get();
      });
    },
    [remove, get]
  );
  return (
    <Stack spacing={spacing} mx={margin}>
      <CategoriesHeader isLoading={isLoading} />
      <Accordion defaultIndex={[0]} allowMultiple>
        <Stack spacing={0}>
          {resultGetCategories?.categories?.map((category, index) => (
            <CategoryItem
              key={category.id}
              index={index}
              isLoading={isLoading || isLoadingRemoveCategory}
              deleteCategory={deleteCategory}
              {...category}
            />
          ))}
        </Stack>
      </Accordion>
    </Stack>
  );
};

export default Categories;
