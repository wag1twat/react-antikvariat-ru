import { Stack } from '@chakra-ui/react'
import { useGet } from 'api/useGet'
import Loader from 'components/Loader'
import SecondaryLayoutMenu from 'components/SecondatyLayoutMenu.tsx'
import React from 'react'
import { margin, spacing } from 'utils/styles'
import CategoryItem from './CategoryItem'
import {
  ICategories,
  ICategoryItemFromRequest,
} from 'types/components/Categories'

const Categories: ICategories = () => {
  const { get, result, isLoading } = useGet<{
    categories: ICategoryItemFromRequest[] | null
  } | null>('/getcategories', {})

  React.useEffect(() => {
    get()
  }, [get])

  return (
    <Stack spacing={spacing} mx={margin}>
      <SecondaryLayoutMenu />
      <Loader isLoading={isLoading}>
        <Stack spacing={spacing}>
          {result?.categories?.map((category) => (
            <CategoryItem key={category.id} {...category} />
          ))}
        </Stack>
      </Loader>
    </Stack>
  )
}

export default Categories
