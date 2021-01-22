import { Accordion, Stack } from "@chakra-ui/react";
import { useGet } from "api/useGet";
import Loader from "components/Loader";
import SecondaryLayoutMenu from "components/SecondatyLayoutMenu.tsx";
import React from "react";
import { margin, spacing } from "utils/styles";
import CategoryItem from "./CategoryItem";
import {
  ICategories,
  ICategoryItemFromRequest,
} from "types/components/Categories";
import { usePolling } from "hooks/usePolling";

const Categories: ICategories = () => {
  const { get, result, isLoading } = useGet<{
    categories: ICategoryItemFromRequest[] | null;
  } | null>("/categories", {});

  usePolling(true, get, null);

  return (
    <Stack spacing={spacing} mx={margin}>
      <SecondaryLayoutMenu />
      <Loader isLoading={false}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <Stack spacing={spacing}>
            {result?.categories?.map((category, index) => (
              <CategoryItem key={category.id} index={index} {...category} />
            ))}
          </Stack>
        </Accordion>
      </Loader>
    </Stack>
  );
};

export default Categories;
