const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-f972fec7.js","imports":["_app/immutable/start-f972fec7.js","_app/immutable/chunks/index-7f3551f2.js","_app/immutable/chunks/singletons-c1916556.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-6a2bfe47.js'),
			() => import('./chunks/1-bd3d1068.js'),
			() => import('./chunks/2-aeb9184d.js'),
			() => import('./chunks/3-78df03b4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/records",
				pattern: /^\/api\/records\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server-ca155d14.js')
			},
			{
				id: "/api/user",
				pattern: /^\/api\/user\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server-a8c16f7b.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
