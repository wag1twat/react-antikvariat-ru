import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'
import { gradientCancel, gradientHoverCancel } from 'utils/styles'

const GradienCanceltButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      bg={gradientCancel}
      _hover={{ bg: gradientHoverCancel }}
      color="#fff"
      size="sm"
      {...rest}
    >
      {children}
    </Button>
  )
}

export default GradienCanceltButton
