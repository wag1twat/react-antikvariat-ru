import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useGet } from "api/useGet";
import AddSubCategoriesDrawer from "components/AddSubCategoriesDrawer";
import GradientConfirmButton from "components/Buttons/GradientConfirmButton";
import useLocations from "hooks/useLocations";
import { usePolling } from "hooks/usePolling";
import React from "react";
import { ICategoryItem } from "types/components/Categories";
import { CardIcon } from "utils/icons";
import { gap, spacing } from "utils/styles";
import { ResponseGetSubcategories } from "./types";

const CategoryItem: ICategoryItem = ({ index, id, name }) => {
  const { localization } = useLocations();

  const {
    isOpen: isOpenAddSubCategoriesDrawer,
    onOpen: onOpenAddSubCategoriesDrawer,
    onClose: onCloseAddSubCategoriesDrawer,
  } = useDisclosure();

  const { get, result, error, isLoading } = useGet<ResponseGetSubcategories>(
    `/subcategories`,
    {}
  );

  const getSubcategories = React.useCallback(() => {
    get({
      categoryId: id,
    });
  }, [get, id]);

  usePolling(true, getSubcategories, null, 5000);

  return (
    <AccordionItem>
      <AccordionButton as={Box}>
        <Grid w="inherit" templateColumns="auto 1fr 200px auto" gap={gap}>
          <Text>{index + 1}.</Text>
          <Text textAlign="left">{name}</Text>
          <GradientConfirmButton
            size="xs"
            onClick={(e) => {
              e.stopPropagation();
              onOpenAddSubCategoriesDrawer();
            }}
            rightIcon={<CardIcon />}
          >
            {localization.buttonAddSubCategories}
          </GradientConfirmButton>
          <AccordionIcon />
        </Grid>
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Stack spacing={spacing}>
          {result?.subcategories.map((subcategory) => {
            return <Text key={subcategory.id}>{subcategory.name}</Text>;
          })}
        </Stack>
      </AccordionPanel>
      <AddSubCategoriesDrawer
        categoryId={id}
        isOpen={isOpenAddSubCategoriesDrawer}
        onClose={onCloseAddSubCategoriesDrawer}
      />
    </AccordionItem>
  );
};

export default CategoryItem;
