import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<main>
				<NavigationMenu />
				<div className="container">
					<Content />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
