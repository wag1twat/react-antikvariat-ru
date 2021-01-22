import { DrawerBody, ModalBodyProps } from "@chakra-ui/react";
import React from "react";

const CustDrawerBody: React.FC<ModalBodyProps> = ({ children, ...rest }) => {
  return (
    <DrawerBody p={0} m={0} {...rest}>
      {children}
    </DrawerBody>
  );
};

export default CustDrawerBody;
