import AboutMe from "./AboutMe";

const SideContent = (props) => {
	return (
		<>
			<div id="side-content">
				<AboutMe
					title="About Me"
					picture="https://www.shutterstock.com/shutterstock/photos/2185640183/display_1500/stock-photo-french-male-takes-photo-with-smartphone-at-sunset-2185640183.jpg"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque numquam
                autem porro alias nisi blanditiis tempore nam saepe consectetur nostrum
                odio tempora pariatur natus harum asperiores vitae necessitatibus ipsam
                animi, ipsum magnam error quisquam hic unde? Dignissimos aut perferendis
                debitis, possimus amet eaque in iure consequuntur quos rem ad hic
                molestias, culpa porro, numquam explicabo praesentium dolorum dolor eius
                facere autem qui temporibus cupiditate."
				/>
			</div>
		</>
	);
};

export default SideContent;
