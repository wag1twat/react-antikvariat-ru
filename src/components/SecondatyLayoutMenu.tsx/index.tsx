import { Button, Heading, Stack, useDisclosure } from "@chakra-ui/react";
import AddCategoryDrawer from "components/AddCategoryDrawer";
import GradientConfirmButton from "components/Buttons/GradientConfirmButton";
import useLocalizationRouteName from "hooks/useLocalizationRouteName";
import useLocations from "hooks/useLocations";
import React from "react";
import { useHistory } from "react-router-dom";
import { CardIcon } from "utils/icons";
import routes from "utils/routes";
import { spacing } from "utils/styles";

const SecondaryLayoutMenu = () => {
  const history = useHistory();

  const [pathname, setPathname] = React.useState(history.location.pathname);

  const {
    isOpen: isOpenAddCategoryDrawer,
    onOpen: onOpenAddCategoryDrawer,
    onClose: onCloseAddCategoryDrawer,
  } = useDisclosure();

  const { localization } = useLocations();

  const { header } = useLocalizationRouteName();

  history.listen((location) => setPathname(location.pathname));

  return (
    <Stack direction="column" spacing={spacing}>
      <Stack direction="row" spacing={spacing} alignItems="center">
        <Heading size="xl">{header}</Heading>
        {pathname === routes.categories && (
          <GradientConfirmButton
            size="sm"
            onClick={onOpenAddCategoryDrawer}
            rightIcon={<CardIcon />}
          >
            {localization.buttonAdd}
          </GradientConfirmButton>
        )}
      </Stack>
      <Stack direction="row" spacing={spacing}>
        <Button size="xs">{localization.buttonCard}</Button>
        <Button size="xs" isDisabled>
          {localization.buttonTable}
        </Button>
      </Stack>
      <AddCategoryDrawer
        isOpen={isOpenAddCategoryDrawer}
        onClose={onCloseAddCategoryDrawer}
      />
    </Stack>
  );
};

export default SecondaryLayoutMenu;
