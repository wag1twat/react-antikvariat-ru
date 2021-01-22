import { Stack } from "@chakra-ui/react";
import { useGet } from "api/useGet";
import Loader from "components/Loader";
import React, { useEffect } from "react";

import { margin, spacing } from "utils/styles";
import GoodItem from "./GoodItem";
import { IGoodItemFromRequest, IGoods } from "types/components/Goods";
import GoodsHeader from "./GoodsHeader";

const Goods: IGoods = () => {
  const { get, result, isLoading } = useGet<{
    goods: IGoodItemFromRequest[] | null;
  }>("/goods", {});

  useEffect(() => {
    get();
  }, [get]);

  return (
    <Stack spacing={spacing} mx={margin}>
      <GoodsHeader />
      <Loader isLoading={isLoading}>
        <Stack spacing={spacing}>
          {result?.goods?.map((good) => (
            <GoodItem key={good.id} {...good} />
          ))}
        </Stack>
      </Loader>
    </Stack>
  );
};

export default Goods;
