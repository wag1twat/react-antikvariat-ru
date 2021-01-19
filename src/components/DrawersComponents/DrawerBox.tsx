import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'
import { margin } from 'utils/styles'

const DrawerBox: React.FC<BoxProps> = ({ children, ...rest }) => {
  return (
    <Box mx={margin} {...rest}>
      {children}
    </Box>
  )
}

export default DrawerBox
