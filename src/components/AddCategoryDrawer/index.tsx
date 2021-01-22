import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  ModalProps,
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
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { padding, spacing } from "utils/styles";
import { IAddCategoryDrawer, IAddCategoryFormData } from "./types";
import { AddCategorySchema } from "./schema";
import { DeleteIcon } from "utils/icons";
import { useGet } from "api/useGet";
import { usePost } from "api/usePost";

const AddCategoryDrawer: IAddCategoryDrawer = ({ isOpen, onClose }) => {
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
            <DrawerFooter p={padding}>
              <Stack spacing={spacing}>
                <Stack spacing={spacing} direction="row">
                  <GradienCanceltButton
                    mr={3}
                    onClick={onClose}
                    isDisabled={isLoading}
                  >
                    {localization.buttonCancel}
                  </GradienCanceltButton>
                  <GradientConfirmButton
                    onClick={addCategory}
                    isDisabled={!formState.isValid || isLoading}
                  >
                    {localization.form.category.add}
                  </GradientConfirmButton>
                </Stack>
              </Stack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </DrawerBox>
  );
};

export default AddCategoryDrawer;
