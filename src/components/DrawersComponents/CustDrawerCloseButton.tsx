import { DrawerCloseButton } from "@chakra-ui/react";
import React from "react";
import { padding } from "utils/styles";

const CustDrawerCloseButton: React.FC = () => {
  return <DrawerCloseButton size="md" top={padding} right={padding} />;
};

export default CustDrawerCloseButton;
