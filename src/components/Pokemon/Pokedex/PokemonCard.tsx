import { Result } from "./PokemonCard.types";
import { Card } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const PokemonCard = (props: { Pokemon: Result }) => {
  const { Pokemon } = props;
  return (
    <Card
      style={{ width: 200 }}
      cover={
        <img
          alt={Pokemon.name}
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[<EllipsisOutlined key="ellipsis" />]}
    >
      <Card.Meta title={Pokemon.name} description="This is the description" />
    </Card>
  );
};
export default PokemonCard;
