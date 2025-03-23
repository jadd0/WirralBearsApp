<script>
  import { signIn } from "@auth/sveltekit/client"
  let username = ""
  let password = ""
</script>

<div>
  <form>
    <label>
      Username
      <input name="username" type="text" bind:value={username} />
    </label>
    <label>
      Password
      <input name="password" type="password" bind:value={password} />
    </label>
    <button on:click={() => signIn("credentials", { username, password })}>
      Log in
    </button>
  </form>
</div>