export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-f972fec7.js","imports":["_app/immutable/start-f972fec7.js","_app/immutable/chunks/index-7f3551f2.js","_app/immutable/chunks/singletons-c1916556.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
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
				endpoint: () => import('./entries/endpoints/api/records/_server.js')
			},
			{
				id: "/api/user",
				pattern: /^\/api\/user\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/user/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};