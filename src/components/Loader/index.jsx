import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = ({ isLoading, children }) => {
  if (isLoading) {
    return (
      <Flex justifyContent="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    )
  }
  return <>{children}</>
}

export default Loader
