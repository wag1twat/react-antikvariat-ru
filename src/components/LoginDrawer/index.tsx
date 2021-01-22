import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Input,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import GradienCanceltButton from "components/Buttons/GradientCancelButton";
import GradientConfirmButton from "components/Buttons/GradientConfirmButton";
import CustDrawerBody from "components/DrawersComponents/CustDrawerBody";
import CustDrawerFooter from "components/DrawersComponents/CustDrawerFooter";
import CustDrawerHeader from "components/DrawersComponents/CustDrawerHeader";
import DrawerBox from "components/DrawersComponents/DrawerBox";
import useLocations from "hooks/useLocations";
import React from "react";
import { Nullable } from "types/utility";
import { UserIcon } from "utils/icons";
import { margin, padding, spacing } from "utils/styles";

const LoginDrawer = () => {
  const { localization } = useLocations();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref: React.MutableRefObject<Nullable<HTMLInputElement>> = React.useRef(
    null
  );

  return (
    <DrawerBox>
      <GradientConfirmButton
        size="sm"
        onClick={onOpen}
        rightIcon={<UserIcon />}
        my={margin}
      >
        {localization.buttonLogin}
      </GradientConfirmButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        initialFocusRef={ref}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton size="md" top={padding} right={padding} />
            <CustDrawerHeader>{localization.loginHeader}</CustDrawerHeader>
            <CustDrawerBody>
              <Stack spacing={spacing} padding={padding}>
                <Input
                  name="data-login-antikvariat-ru"
                  ref={ref}
                  placeholder={localization.loginPlaceholder}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder={localization.loginPasswordPlaceholder}
                />
              </Stack>
            </CustDrawerBody>
            <CustDrawerFooter>
              <GradienCanceltButton mr={3} onClick={onClose}>
                {localization.buttonCancel}
              </GradienCanceltButton>
              <GradientConfirmButton>
                {localization.buttonLogin}
              </GradientConfirmButton>
            </CustDrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </DrawerBox>
  );
};

export default LoginDrawer;
