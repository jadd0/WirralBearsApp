import type { PageServerLoad } from "./$types"
import { redirect } from "@sveltejs/kit"

export const load: PageServerLoad = async (events) => {
  const session = await events.locals.auth()

  if (!session?.user) {
    redirect(303, `/login`)
  }

  return {
    session,
  }
}