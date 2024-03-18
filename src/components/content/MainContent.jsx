import Item from "./Item";

const MainContent = (props) => {
	return (
		<>
			<div id="main-content">
				<Item
					title="Titre 1"
					subtitle="This is a subtitle"
					picture="https://www.shutterstock.com/shutterstock/photos/532073215/display_1500/stock-photo-businesspeople-discussing-together-in-conference-room-during-meeting-at-office-532073215.jpg"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque numquam
                autem porro alias nisi blanditiis tempore nam saepe consectetur nostrum
                odio tempora pariatur natus harum asperiores vitae necessitatibus ipsam
                animi, ipsum magnam error quisquam hic unde? Dignissimos aut perferendis
                debitis, possimus amet eaque in iure consequuntur quos rem ad hic
                molestias, culpa porro, numquam explicabo praesentium dolorum dolor eius
                facere autem qui temporibus cupiditate. Blanditiis exercitationem
                distinctio omnis, commodi accusamus et unde praesentium! Voluptatem, modi!
                Modi, quidem molestiae. Voluptas harum doloribus mollitia consequuntur,
                atque consequatur aliquid, ea repellendus, nesciunt id dolores dolorem
                debitis eveniet illo esse fuga molestiae possimus eius."
				/>
				<Item
					title="Titre 2"
					subtitle="This is also a subtitle"
					picture="https://www.shutterstock.com/shutterstock/photos/125338145/display_1500/stock-photo-image-of-business-partners-discussing-documents-and-ideas-at-meeting-125338145.jpg"
					description="Blanditiis exercitationem
                distinctio omnis, commodi accusamus et unde praesentium! Voluptatem, modi!
                Modi, quidem molestiae. Voluptas harum doloribus mollitia consequuntur,
                atque consequatur aliquid, ea repellendus, nesciunt id dolores dolorem
                debitis eveniet illo esse fuga molestiae possimus eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque numquam
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

export default MainContent;
