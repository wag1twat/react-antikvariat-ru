import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useGet } from "api/useGet";
import AddSubCategoriesDrawer from "components/AddSubCategoriesDrawer";
import GradientConfirmButton from "components/Buttons/GradientConfirmButton";
import useLocations from "hooks/useLocations";
import React from "react";
import { ICategoryItem } from "types/components/Categories";
import { CardIcon, DeleteIcon } from "utils/icons";
import { gap, padding, spacing } from "utils/styles";
import { ResponseGetSubcategories } from "./types";

const CategoryItem: ICategoryItem = ({
  index,
  id,
  name,
  isLoading,
  deleteCategory,
}) => {
  const { localization } = useLocations();

  const {
    isOpen: isOpenAddSubCategoriesDrawer,
    onOpen: onOpenAddSubCategoriesDrawer,
    onClose: onCloseAddSubCategoriesDrawer,
  } = useDisclosure();

  const {
    get,
    result,
    isLoading: isLoadingSubCategories,
  } = useGet<ResponseGetSubcategories>(`/subcategories`, {});

  const isDisabled = isLoading || isLoadingSubCategories;

  React.useEffect(() => {
    if (isDisabled) {
      get({
        categoryId: id,
      });
    }
  }, [get, id, isDisabled]);
  return (
    <AccordionItem>
      <AccordionButton as={Box}>
        <Grid w="inherit" templateColumns="auto 1fr auto auto" gap={gap}>
          <Badge
            colorScheme="green"
            d="flex"
            justifyContent="center"
            alignItems="center"
            variant="solid"
          >
            {index + 1}
          </Badge>
          <Text textAlign="left">{name}</Text>
          <AccordionIcon />
          <IconButton
            size="xs"
            aria-label="data-delete-category"
            colorScheme="red"
            icon={<DeleteIcon />}
            onClick={(event) => {
              event.stopPropagation();
              deleteCategory(id);
            }}
            isDisabled={isDisabled}
          />
        </Grid>
      </AccordionButton>
      <AccordionPanel p={padding} bg="gray.100">
        <Stack spacing={spacing}>
          {result?.subcategories.length && (
            <>
              <Heading size="sm">{localization.subcategories}</Heading>
            </>
          )}
          {!result?.subcategories.length && (
            <>
              <Heading size="sm">{localization.emptySubcategories}</Heading>
            </>
          )}
          {result?.subcategories.map((subcategory) => (
            <Text key={subcategory.id}>{subcategory.name}</Text>
          ))}
          <Flex justifyContent="flex-end">
            <GradientConfirmButton
              size="xs"
              onClick={onOpenAddSubCategoriesDrawer}
              rightIcon={<CardIcon />}
              isDisabled={isDisabled}
            >
              {localization.buttonAddSubCategories}
            </GradientConfirmButton>
          </Flex>
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
