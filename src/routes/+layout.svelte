<script>
	import '../../static/styles.css'; // Import your global CSS here
	import Nav from '$lib/components/nav/+page.svelte';
	import Footer from '$lib/components/footer/+page.svelte';
</script>

<body>
	<Nav />
	<slot />
	<Footer />
</body>
