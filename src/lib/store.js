import { writable, derived } from 'svelte/store';
import { loadCart } from './utils/shopify';
import { SORT_OPTIONS, sortProducts } from './utils/productSort';

export const cartQuantity = writable('');
export const cart = writable([]);
export const search = writable('');
export const sortOption = writable(SORT_OPTIONS.FEATURED);
export const products = writable([]);

export const sortedProducts = derived([products, sortOption], ([$products, $sortOption]) => {
	return sortProducts($products, $sortOption);
});

export const getCartItems = async () => {
	let cartId = JSON.parse(localStorage.getItem('cartId'));

	try {
		const shopifyResponse = await loadCart(cartId);

		let sum = 0;
		shopifyResponse.body?.data?.cart?.lines?.edges?.forEach((d) => {
			sum += d.node.quantity;
		});
		cartQuantity.set(sum);
		return shopifyResponse;
	} catch (error) {
		console.log(error);
	}
};
