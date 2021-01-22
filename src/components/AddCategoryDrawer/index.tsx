import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import GradienCanceltButton from "components/Buttons/GradientCancelButton";
import GradientConfirmButton from "components/Buttons/GradientConfirmButton";
import useLocations from "hooks/useLocations";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import DrawerBox from "components/DrawersComponents/DrawerBox";
import CustDrawerHeader from "components/DrawersComponents/CustDrawerHeader";
import CustDrawerBody from "components/DrawersComponents/CustDrawerBody";
import { Controller, useForm } from "react-hook-form";
import { padding, spacing } from "utils/styles";
import { IAddCategoryDrawer, IAddCategoryFormData } from "./types";
import { AddCategorySchema } from "./schema";
import { usePost } from "api/usePost";
import CustDrawerFooter from "components/DrawersComponents/CustDrawerFooter";

const AddCategoryDrawer: IAddCategoryDrawer = ({ isOpen, onClose }) => {
  const size = "xs";

  const { localization } = useLocations();

  const {
    formState,
    errors,
    control,
    watch,
    trigger,
    register,
  } = useForm<IAddCategoryFormData>({
    defaultValues: {
      name: "category",
    },
    shouldUnregister: false,
    resolver: yupResolver(AddCategorySchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  React.useEffect(() => {
    trigger(["name"]);
  }, [trigger]);

  const form = watch();

  const { post, result, isLoading, reset } = usePost<{ success: boolean }>(
    `/category`,
    {}
  );

  const addCategory = React.useCallback(() => {
    post({
      name: form.name,
    });
  }, [post, form]);

  React.useEffect(() => {
    if (result?.success) {
      reset();
      onClose();
    }
  }, [result, reset, onClose]);

  return (
    <DrawerBox>
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <CustDrawerHeader>
              {localization.drawerNewCategory}
            </CustDrawerHeader>
            <CustDrawerBody>
              <Stack p={padding} spacing={spacing}>
                <Controller
                  name="name"
                  control={control}
                  render={(props) => {
                    return (
                      <FormControl isInvalid={Boolean(errors.name)}>
                        <FormLabel>
                          {localization.form.category.label}
                        </FormLabel>
                        <Input
                          size={size}
                          {...props}
                          placeholder={localization.form.category.placeholder}
                        />
                        <FormErrorMessage>
                          {errors.name?.message}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                />
              </Stack>
            </CustDrawerBody>
            <CustDrawerFooter>
              <Stack spacing={spacing}>
                <Stack spacing={spacing} direction="row">
                  <GradienCanceltButton
                    mr={3}
                    size={size}
                    onClick={onClose}
                    isDisabled={isLoading}
                  >
                    {localization.buttonCancel}
                  </GradienCanceltButton>
                  <GradientConfirmButton
                    size={size}
                    onClick={addCategory}
                    isDisabled={!formState.isValid || isLoading}
                  >
                    {localization.form.category.save}
                  </GradientConfirmButton>
                </Stack>
              </Stack>
            </CustDrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </DrawerBox>
  );
};

export default AddCategoryDrawer;
