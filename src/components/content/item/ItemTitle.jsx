const ItemTitle = (props) => {
	const titleToUpper = props.title;

	return <h2>{titleToUpper.toUpperCase()}</h2>;
};

export default ItemTitle;
