import { writable } from 'svelte/store';
import { getCartItems } from '$lib/store';

export const cartItems = writable([]);
export const isLoading = writable(false);

export const refreshCart = async () => {
	isLoading.set(true);
	try {
		const res = await getCartItems();
		cartItems.set(res?.body?.data?.cart?.lines?.edges || []);
	} catch (error) {
		console.error('Error refreshing cart:', error);
	} finally {
		isLoading.set(false);
	}
};
