import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import { IGoodItem } from 'types/components/Goods'

const GoodItem: IGoodItem = ({ id, name }) => {
  return (
    <Stack direction="row">
      <Box>id: {id}</Box>
      <Box>name: {name}</Box>
    </Stack>
  )
}

export default GoodItem
