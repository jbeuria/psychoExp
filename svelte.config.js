import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// To allow people to make POST form submissions to your app from other 
		// origins, you will need to disable this option. Be careful!
		csrf: {
		    checkOrigin: false,
		}	
	}
};

export default config;
