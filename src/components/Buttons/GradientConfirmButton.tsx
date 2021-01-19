import { Button, ButtonProps } from '@chakra-ui/react'
import React from 'react'
import { gradientConfirm, gradientHoverConfirm } from 'utils/styles'

const GradientConfirmButton: React.FC<ButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <Button
      bg={gradientConfirm}
      _hover={{ bg: gradientHoverConfirm }}
      color="#fff"
      size="sm"
      {...rest}
    >
      {children}
    </Button>
  )
}

export default GradientConfirmButton
