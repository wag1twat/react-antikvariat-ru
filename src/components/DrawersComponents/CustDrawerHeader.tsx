import { DrawerHeader, ModalHeaderProps } from '@chakra-ui/react'
import React from 'react'
import { padding } from 'utils/styles'

const CustDrawerHeader: React.FC<ModalHeaderProps> = ({
  children,
  ...rest
}) => {
  return (
    <DrawerHeader p={padding} {...rest}>
      {children}
    </DrawerHeader>
  )
}

export default CustDrawerHeader
