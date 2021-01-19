import { Box, Text, useTheme } from '@chakra-ui/react'
import useLocations from 'hooks/useLocations'
import React from 'react'
import { ILogo } from 'types/components/Login'
import { margin } from 'utils/styles'

const Logo: ILogo = () => {
  const { localization } = useLocations()

  return (
    <Text margin={margin} letterSpacing={2} fontSize="2xl">
      {localization.app}
    </Text>
  )
}

export default Logo
