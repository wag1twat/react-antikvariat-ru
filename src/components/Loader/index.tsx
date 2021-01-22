import { Flex, Spinner, SpinnerProps } from "@chakra-ui/react";
import React from "react";

const Loader: React.FC<SpinnerProps & { isLoading: boolean }> = ({
  isLoading,
  children,
  ...rest
}) => {
  if (isLoading) {
    return (
      <Flex justifyContent="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
          {...rest}
        />
      </Flex>
    );
  }
  return <>{children}</>;
};

export default Loader;
