export const SORT_OPTIONS = {
	FEATURED: 'featured',
	PRICE_HIGH_TO_LOW: 'price-high-to-low',
	PRICE_LOW_TO_HIGH: 'price-low-to-high',
	TITLE_A_TO_Z: 'title-a-to-z',
	TITLE_Z_TO_A: 'title-z-to-a',
	DATE_NEW_TO_OLD: 'date-new-to-old',
	DATE_OLD_TO_NEW: 'date-old-to-new'
};

export function sortProducts(products, sortOption) {
	if (!products || !Array.isArray(products)) return [];

	const productsCopy = [...products];

	switch (sortOption) {
		case SORT_OPTIONS.PRICE_HIGH_TO_LOW:
			return productsCopy.sort(
				(a, b) =>
					parseFloat(b.node.priceRange.maxVariantPrice.amount) -
					parseFloat(a.node.priceRange.maxVariantPrice.amount)
			);

		case SORT_OPTIONS.PRICE_LOW_TO_HIGH:
			return productsCopy.sort(
				(a, b) =>
					parseFloat(a.node.priceRange.maxVariantPrice.amount) -
					parseFloat(b.node.priceRange.maxVariantPrice.amount)
			);

		case SORT_OPTIONS.TITLE_A_TO_Z:
			return productsCopy.sort((a, b) => a.node.title.localeCompare(b.node.title));

		case SORT_OPTIONS.TITLE_Z_TO_A:
			return productsCopy.sort((a, b) => b.node.title.localeCompare(a.node.title));

		case SORT_OPTIONS.DATE_NEW_TO_OLD:
			return productsCopy.sort((a, b) => new Date(b.node.createdAt) - new Date(a.node.createdAt));

		case SORT_OPTIONS.DATE_OLD_TO_NEW:
			return productsCopy.sort((a, b) => new Date(a.node.createdAt) - new Date(b.node.createdAt));

		case SORT_OPTIONS.FEATURED:
		default:
			return productsCopy;
	}
}
