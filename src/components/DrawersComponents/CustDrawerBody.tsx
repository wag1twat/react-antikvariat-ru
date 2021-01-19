import { Box, DrawerBody, ModalBodyProps } from '@chakra-ui/react'
import React from 'react'
import { margin } from 'utils/styles'

const CustDrawerBody: React.FC<ModalBodyProps> = ({ children, ...rest }) => {
  return (
    <DrawerBody p={0} {...rest}>
      <Box my={margin}>{children}</Box>
    </DrawerBody>
  )
}

export default CustDrawerBody
