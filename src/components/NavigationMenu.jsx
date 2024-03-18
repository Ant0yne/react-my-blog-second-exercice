import Link from "./navigationMenu/Link";

const NavigationMenu = () => {
	return (
		<>
			<nav id="navmen">
				<div>
					<Link
						text="Random link 1"
						className="navmen-link-left"
						href="https://htmlcheatsheet.com/"
					/>
					<Link
						text="Random link 2"
						className="navmen-link-left"
						href="https://html-css-js.com/css/generator/text-shadow/"
					/>
					<Link
						text="Random link 3"
						className="navmen-link-left"
						href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
					/>
				</div>
				<Link
					text="Random link 4"
					className="navmen-link-right"
					href="https://docs.emmet.io/cheat-sheet/"
				/>
			</nav>
		</>
	);
};

export default NavigationMenu;
