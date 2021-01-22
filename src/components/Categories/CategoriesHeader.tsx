import { Flex, Heading, Stack, useDisclosure } from "@chakra-ui/react";
import AddCategoryDrawer from "components/AddCategoryDrawer";
import GradientConfirmButton from "components/Buttons/GradientConfirmButton";
import Loader from "components/Loader";
import useLocations from "hooks/useLocations";
import React from "react";
import { CardIcon } from "utils/icons";
import { spacing } from "utils/styles";

const CategoriesHeader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const {
    isOpen: isOpenAddCategoryDrawer,
    onOpen: onOpenAddCategoryDrawer,
    onClose: onCloseAddCategoryDrawer,
  } = useDisclosure();

  const { localization } = useLocations();

  return (
    <Stack direction="column" spacing={spacing}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading size="xl">{localization.categoriesHeader}</Heading>
        <Loader isLoading={isLoading} size="md" />
      </Flex>
      <Flex>
        <GradientConfirmButton
          size="sm"
          onClick={onOpenAddCategoryDrawer}
          rightIcon={<CardIcon />}
        >
          {localization.buttonAdd}
        </GradientConfirmButton>
      </Flex>
      <AddCategoryDrawer
        isOpen={isOpenAddCategoryDrawer}
        onClose={onCloseAddCategoryDrawer}
      />
    </Stack>
  );
};

export default CategoriesHeader;
