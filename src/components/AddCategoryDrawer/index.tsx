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
} from '@chakra-ui/react'
import GradienCanceltButton from 'components/Buttons/GradientCancelButton'
import GradientConfirmButton from 'components/Buttons/GradientConfirmButton'
import useLocations from 'hooks/useLocations'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import DrawerBox from 'components/DrawersComponents/DrawerBox'
import CustDrawerHeader from 'components/DrawersComponents/CustDrawerHeader'
import CustDrawerBody from 'components/DrawersComponents/CustDrawerBody'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { padding, spacing } from 'utils/styles'
import { IAddCategoryFormData } from './types'
import { AddCategorySchema } from './schema'
import { useGet } from 'api/useGet'
import { DeleteIcon } from 'utils/icons'

interface IAddCategoryDrawer {
  onClose: ModalProps['onClose']
  isOpen: ModalProps['isOpen']
}
const AddCategoryDrawer: React.FC<IAddCategoryDrawer> = ({
  isOpen,
  onClose,
}) => {
  const { localization } = useLocations()

  const {
    formState,
    errors,
    control,
    watch,
    trigger,
    register,
  } = useForm<IAddCategoryFormData>({
    // @ts-ignore
    defaultValues: {
      name: 'category',
      subCategories: [{ name: 'subcategory' }, { name: 'subcategory' }],
    },
    shouldUnregister: false,
    resolver: yupResolver(AddCategorySchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  })

  React.useEffect(() => {
    trigger(['name', 'subCategories'])
  }, [trigger])

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'subCategories',
  })

  const form = watch()

  const { get, result, isLoading, reset } = useGet(`/addcategory`, {})

  const addCategory = React.useCallback(() => {
    get({ data: { subCategories: form.subCategories, name: form.name } })
  }, [get, form])

  const closeOnSuccess = React.useCallback(() => {
    reset()
    onClose()
  }, [reset, onClose])

  React.useEffect(() => {}, [])
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
                    )
                  }}
                />
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
                                errors.subCategories?.[index]?.name,
                              )}
                            >
                              <Input
                                name={`subCategories[${index}].name`}
                                ref={register()}
                                defaultValue={field.name}
                                placeholder={
                                  localization.form.subCategory.placeholder
                                }
                              />
                              <FormErrorMessage>
                                {errors.subCategories?.[index]?.name?.message}
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
                        )
                      })}
                    </Stack>
                  </FormControl>
                )}
              </Stack>
            </CustDrawerBody>
            <DrawerFooter p={padding}>
              <Stack spacing={spacing}>
                <GradientConfirmButton
                  onClick={() => append({ name: '' })}
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
  )
}

export default AddCategoryDrawer
