const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-9a664b67.js","imports":["_app/immutable/start-9a664b67.js","_app/immutable/chunks/index-65bc829e.js","_app/immutable/chunks/singletons-efdfcb03.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-65bbac90.js'),
			() => import('./chunks/1-32b2b580.js'),
			() => import('./chunks/2-5df81e66.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
