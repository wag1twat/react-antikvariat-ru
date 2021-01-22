import { Heading, Stack } from "@chakra-ui/react";
import useLocations from "hooks/useLocations";
import React from "react";
import { spacing } from "utils/styles";

const GoodsHeader = () => {
  const { localization } = useLocations();

  return (
    <Stack direction="column" spacing={spacing}>
      <Stack direction="row" spacing={spacing} alignItems="center">
        <Heading size="xl">{localization.goodsHeader}</Heading>
      </Stack>
      {/* <Stack direction="row" spacing={spacing}>
        <Button size="xs">{localization.buttonCard}</Button>
        <Button size="xs" isDisabled>
          {localization.buttonTable}
        </Button>
      </Stack> */}
    </Stack>
  );
};

export default GoodsHeader;
