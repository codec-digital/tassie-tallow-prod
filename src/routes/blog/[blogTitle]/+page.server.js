// @ts-nocheck
// src/routes/tours/[tourName]/+page.server.js
import { blogs } from '$lib/utils/blogs';
import slugify from 'slugify';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	// Access the tourName from the URL parameters
	const blogTitle = params.blogTitle;

	// Find the matching tour from the static tours array
	const blog = blogs.find((b) => {
		const generatedSlug = slugify(b.title, { lower: true });
		const decodedUrlTitle = decodeURIComponent(blogTitle); // Decode if necessary
		return generatedSlug === decodedUrlTitle.toLowerCase(); // Case-insensitive comparison
	});

	if (!blog) {
		throw new Error('Blog not found');
	}

	return {
		blog
	};
}
