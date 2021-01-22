import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
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
import { useFieldArray, useForm } from "react-hook-form";
import { padding, spacing } from "utils/styles";
import { IAddSubCategoriesDrawer, IAddSubCategoriesFormData } from "./types";
import { AddSubCategoriesSchema } from "./schema";
import { DeleteIcon } from "utils/icons";
import { usePost } from "api/usePost";
import CustDrawerFooter from "components/DrawersComponents/CustDrawerFooter";

const AddSubCategoriesDrawer: IAddSubCategoriesDrawer = ({
  categoryId,
  isOpen,
  onClose,
}) => {
  const size = "xs";

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
      subcategories: [{ name: "" }, { name: "" }],
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
              {localization.drawerNewSubcategoriesHeader}
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
                                size={size}
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
                              size={size}
                              aria-label="data-delete-subcategory"
                              colorScheme="red"
                              icon={<DeleteIcon />}
                              onClick={() => remove(index)}
                              isDisabled={
                                isLoading || form.subcategories.length === 1
                              }
                            />
                          </Stack>
                        );
                      })}
                    </Stack>
                  </FormControl>
                )}
              </Stack>
            </CustDrawerBody>
            <CustDrawerFooter>
              <Stack spacing={spacing}>
                <GradientConfirmButton
                  size={size}
                  onClick={() => append({ name: "" })}
                  isDisabled={isLoading}
                >
                  {localization.form.subCategory.add}
                </GradientConfirmButton>
                <Stack spacing={spacing} direction="row">
                  <GradienCanceltButton
                    size={size}
                    mr={3}
                    onClick={onClose}
                    isDisabled={isLoading}
                  >
                    {localization.buttonCancel}
                  </GradienCanceltButton>
                  <GradientConfirmButton
                    size={size}
                    onClick={addSubCategories}
                    isDisabled={!formState.isValid || isLoading}
                  >
                    {localization.form.subCategory.save}
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

export default AddSubCategoriesDrawer;
