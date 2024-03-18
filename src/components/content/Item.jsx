import ItemTitle from "./item/ItemTitle";
import ItemSubtitle from "./item/ItemSubtitle";
import ItemPicture from "./item/ItemPicture";
import ItemDescription from "./item/ItemDescription";

const Item = (props) => {
	const { title, subtitle, picture, description } = props;

	return (
		<>
			<div>
				<ItemTitle title={title} />
				<ItemSubtitle subtitle={subtitle} />
				<ItemPicture picture={picture} />
				<ItemDescription description={description} />
			</div>
		</>
	);
};

export default Item;
