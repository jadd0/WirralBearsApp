// import { json } from '@sveltejs/kit';
// import type { RequestHandler } from './$types';
// import { env } from '$env/static/private';
// import { generateCookie } from '$lib/jwt';

// export const POST: RequestHandler = async ({ request, cookies }) => {
// 	const { username, password } = await request.json();

// 	if (username === env.VITE_AUTH_USERNAME && password === env.VITE_AUTH_PASSWORD) {
//     const cookie = generateCookie();

//     cookies.set('auth', '')

// 		return json(`${token}.${expiresAt}`);
// 	} 
  
//   else {
// 		return json({ error: 'Invalid credentials' }, { status: 401 });
// 	}
//  };
