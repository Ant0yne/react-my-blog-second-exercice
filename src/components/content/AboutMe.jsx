import ItemTitle from "./item/ItemTitle";
import ItemPicture from "./item/ItemPicture";
import ItemDescription from "./item/ItemDescription";

const AboutMe = (props) => {
	const { title, picture, description } = props;

	return (
		<>
			<div>
				<ItemTitle title={title} />
				<ItemPicture picture={picture} />
				<ItemDescription description={description} />
			</div>
		</>
	);
};

export default AboutMe;
