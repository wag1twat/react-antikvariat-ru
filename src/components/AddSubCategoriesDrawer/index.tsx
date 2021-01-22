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
import { IAddSubCategoriesDrawer, IAddSubCategoriesFormData } from "./types";
import { AddSubCategoriesSchema } from "./schema";
import { DeleteIcon } from "utils/icons";
import { usePost } from "api/usePost";

const AddSubCategoriesDrawer: IAddSubCategoriesDrawer = ({
  categoryId,
  isOpen,
  onClose,
}) => {
  const { localization } = useLocations();

  const {
    formState,
    errors,
    control,
    watch,
    trigger,
    register,
  } = useForm<IAddSubCategoriesFormData>({
    defaultValues: {
      subcategories: [{ name: "subcategory" }, { name: "subcategory" }],
    },
    shouldUnregister: false,
    resolver: yupResolver(AddSubCategoriesSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  React.useEffect(() => {
    trigger(["subcategories"]);
  }, [trigger]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subcategories",
  });

  const form = watch();

  const { post, result, isLoading, reset } = usePost<{ success: boolean }>(
    `/subcategories`,
    {}
  );

  const addSubCategories = React.useCallback(() => {
    post({
      categoryId,
      subcategories: form.subcategories,
    });
  }, [post, categoryId, form]);

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
                {fields.length && (
                  <FormControl>
                    <FormLabel>{localization.form.subCategory.label}</FormLabel>
                    <Stack spacing={spacing}>
                      {fields.map((field, index) => {
                        return (
                          <Stack
                            key={field.id}
                            direction="row"
                            spacing={spacing}
                          >
                            <FormControl
                              isInvalid={Boolean(
                                errors.subcategories?.[index]?.name
                              )}
                            >
                              <Input
                                name={`subcategories[${index}].name`}
                                ref={register()}
                                defaultValue={field.name}
                                placeholder={
                                  localization.form.subCategory.placeholder
                                }
                              />
                              <FormErrorMessage>
                                {errors.subcategories?.[index]?.name?.message}
                              </FormErrorMessage>
                            </FormControl>
                            <IconButton
                              aria-label="data-delete-subcategory"
                              colorScheme="red"
                              icon={<DeleteIcon />}
                              onClick={() => remove(index)}
                              isDisabled={isLoading}
                            />
                          </Stack>
                        );
                      })}
                    </Stack>
                  </FormControl>
                )}
              </Stack>
            </CustDrawerBody>
            <DrawerFooter p={padding}>
              <Stack spacing={spacing}>
                <GradientConfirmButton
                  onClick={() => append({ name: "" })}
                  isDisabled={isLoading}
                >
                  {localization.form.subCategory.add}
                </GradientConfirmButton>
                <Stack spacing={spacing} direction="row">
                  <GradienCanceltButton
                    mr={3}
                    onClick={onClose}
                    isDisabled={isLoading}
                  >
                    {localization.buttonCancel}
                  </GradienCanceltButton>
                  <GradientConfirmButton
                    onClick={addSubCategories}
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

export default AddSubCategoriesDrawer;
