import { useState, useEffect } from "react";
import { getData, getCategoryData } from "../../services/firebase";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { Jelly } from "@uiball/loaders";
import "./ItemListContainer.css"

function ItemListContainer() {
	const [products, setProducts] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const { categoryId } = useParams();

	useEffect(() => {
		setIsLoading(true);
		async function requestProducts() {
			let respuesta = categoryId ? await getCategoryData(categoryId) : await getData();
			setProducts(respuesta);
			setIsLoading(false);
		}
		requestProducts();
	}, [categoryId]);

	if (isLoading) {
		return <div className="Jelly"><Jelly size={75} lineWeight={5} speed={0.5} color="#FFB921"/></div>;
	} else {
		return products.length === 0 ? (
		<div className="NoProductsContainer">
			<p className="NoProducts">Recibiremos productos de ésta categoría proximamente.</p>
		</div>
		) : (<ItemList products={products} />);
	}
}

export default ItemListContainer;