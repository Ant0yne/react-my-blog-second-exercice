const Link = (props) => {
	const { text, className, href } = props;

	return (
		<>
			<a className={className} href={href} target="_blank">
				{text}
			</a>
		</>
	);
};

export default Link;
