export interface IGoodItemFromRequest {
  id: string // uuidv4
  name: string
}

export interface IGoodsProps {}

export interface IGoodItemProps extends IGoodItemFromRequest {}

export interface IGoodItem extends React.FC<IGoodItemProps> {}

export interface IGoods extends React.FC {}
