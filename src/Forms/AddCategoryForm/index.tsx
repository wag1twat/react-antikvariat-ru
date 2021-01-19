import {
  FormErrorMessage,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/dist/yup'
import { IAddCategoryForm, IAddCategoryFormData } from './types'
import { AddCategorySchema } from './schema'
import useLocations from 'hooks/useLocations'
import { padding, spacing } from 'utils/styles'

const AddCategoryForm: IAddCategoryForm = () => {
  const { localization } = useLocations()

  const { errors, control, watch } = useForm<IAddCategoryFormData>({
    resolver: yupResolver(AddCategorySchema),
    reValidateMode: 'onChange',
    defaultValues: { name: '' },
    shouldUnregister: false,
  })

  const form = watch()

  console.log(`errors`, errors)

  console.log(`form`, form)
  return (
    <Stack p={padding} spacing={spacing}>
      <Controller
        name="name"
        control={control}
        render={(props) => {
          return (
            <FormControl isInvalid={Boolean(errors.name)}>
              <FormLabel>{localization.form.category.label}</FormLabel>
              <Input
                {...props}
                placeholder={localization.form.category.placeholder}
                isInvalid={Boolean(errors.name)}
              ></Input>
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
          )
        }}
      />
    </Stack>
  )
}

export default AddCategoryForm
