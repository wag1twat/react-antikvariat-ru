import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { ICategoryItem } from 'types/components/Categories'

const CategoryItem: ICategoryItem = ({ id, name }) => {
  return (
    <Stack direction="row">
      <Box>id: {id}</Box>
      <Box>name: {name}</Box>
    </Stack>
  )
}

export default CategoryItem
