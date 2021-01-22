import { DrawerFooter, ModalFooterProps } from "@chakra-ui/react";
import React from "react";
import { padding } from "utils/styles";

const CustDrawerFooter: React.FC<ModalFooterProps> = ({ children }) => {
  return <DrawerFooter p={padding}>{children}</DrawerFooter>;
};

export default CustDrawerFooter;
