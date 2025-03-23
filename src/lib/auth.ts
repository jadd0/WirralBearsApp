// import { SvelteKitAuth } from "@auth/sveltekit"
// import Credentials from "@auth/sveltekit/providers/credentials"

// export const { signIn, signOut, handle } = SvelteKitAuth({
//   providers: [
//     Credentials({
//       credentials: {
//         username: {},
//         password: {},
//       },
//       authorize: async (credentials) => {
//         if (
//           credentials.username === "admin" &&
//           credentials.password === "password"
//         ) {
//           return {
//             id: "1",
//             name: "Admin",
//             email: "admin@example.com",
//           }
//         }
//         return null
//       },
//     }),
//   ],
// })