<script>
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import Carousel from '$lib/components/carousel/+page.svelte';

	// Initialize AOS on mount
	onMount(() => {
		// First bear animation
		const firstBG = document.getElementById('1');
		const firstBear = document.getElementById('2');

		setTimeout(() => {
			firstBG.style.display = 'none';
			firstBear.style.display = 'none';
		}, 1500);

		// Initialize mapbox
		mapboxgl.accessToken =
			'pk.eyJ1IjoiamFkZGFrMjgiLCJhIjoiY2t3cnE0NDcyMHo1NjJ3cDN4eDU5cjkzMSJ9.ArgLo3tWR5WUDLRc1aPjJA';
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/jaddak28/cl03v24lq000p14nywn313x4g',
			center: [-3.078, 53.377],
			zoom: 15
		});

		const marker = new mapboxgl.Marker({ color: 'black' }).setLngLat([-3.078, 53.377]).addTo(map);

		// Slideshow functionality
		let counter = 1;
		const interval = setInterval(() => {
			document.getElementById('radio' + counter).checked = true;
			counter++;
			if (counter > 4) {
				counter = 1;
			}
		}, 4500);

		// Clean up on component unmount
		return () => {
			clearInterval(interval);
			map.remove();
		};
	});

	const carouselImages = [
		{
			id: '1',
			src: 'https://picsum.photos/800/400?random=1',
			alt: 'Random landscape image 1'
		},
		{
			id: '2',
			src: 'https://picsum.photos/800/400?random=2',
			alt: 'Random landscape image 2'
		},
		{
			id: '3',
			src: 'https://picsum.photos/800/400?random=3',
			alt: 'Random landscape image 3'
		},
		{
			id: '4',
			src: 'https://picsum.photos/800/400?random=4',
			alt: 'Random landscape image 4'
		}
	];
</script>

<svelte:head>
	<title>Wirral Bears</title>
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
	<link rel="manifest" href="/favicon_io/site.webmanifest" />
	<link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet" />
</svelte:head>

<div class="firstBG" id="1">
	<img src="/images/bears big red.png" alt="" class="firstBear" id="2" />
</div>

<div id="all">
	<!-- NavBar Div for tablet/PC -->

	<!-- Wirral Bears Banner with link back to Home Page -->
	<a href="/">
		<img src="/images/bears b star1.png" class="bear" alt="Wirral Bears Logo" />
	</a>

	<!-- About Us Box -->
	<div>
		<div class="box">
			<div class="insideBox">
				<h1>About Us</h1>
				<p>
					We are a small club located in Woodchurch, Wirral – who have started many recent
					basketball careers.<br /> We are an advanced club in general, yet we have groups for: Beginner,
					Intermediate and Advanced.
				</p>
			</div>
		</div>
	</div>

	<!--Image slider-->

	<div class="container">
		<h1>Image Carousel</h1>

		<Carousel
			images={carouselImages}
			autoplay={true}
			duration={5000}
			height="400px"
			width="50%"
			showControls={true}
			showIndicators={true}
		/>
	</div>

	<!-- Joining Info Box -->
	<div>
		<div class="box" style="margin-bottom: 30px;">
			<div class="insideBox">
				<h2>Thinking of joining?</h2>
				<p>
					Signing up is a simple process. All you have to do is show up to a session (specific to
					your age group) and that's it!<br /> Your first session is free, but after that it is £6
					per session.<br />To join, please click below to complete your joining form:
				</p>

				<div class="buttonHolder">
					<button
						class="formButton"
						on:click={() =>
							window.open(
								'https://docs.google.com/forms/d/1xyuIacKZlv96QKh8mAARyrk7MR2WHATB1tTouBxo0CU/viewform?edit_requested=true'
							)}
					>
						Click Here
					</button>
				</div>
			</div>
		</div>
	</div>

	<h3>Our Location</h3>

	<!-- Map -->
	<div
		id="map"
		style="display: flex; justify-content: center; align-items: center; width: 100%; height: 60vh"
	></div>

	<!-- Ball 4 All Section -->
	<div class="box">
		<div class="insideBox">
			<h4>Ball 4 All</h4>
			<p style="padding: 0px 20px 0px 20px">
				We have 10 policies in our club. If anyone (player or coach) wants to be involved in the
				youth club, they must commit to the Ball for All principles and hold everyone to account for
				them.
			</p>

			<div class="BallForAll">
				{#each [{ img: '/AZ4A4121.jpg', title: 'Joy' }, { img: '/logan block.jpg', title: 'Positivity' }, { img: '/Respect.jpg', title: 'Respect' }, { img: '/AZ4A3475.jpg', title: 'Equality' }, { img: '/Dedication.jpg', title: 'Dedication and Effort' }, { img: '/Growth.jpg', title: 'Growth' }, { img: '/DSC00376a.jpg', title: 'Pass' }, { img: '/Defence.jpg', title: 'Defence' }, { img: '/Shoot.jpg', title: 'Shoot' }, { img: '/21B4377B-B274-40FC-A729-47687A0DB9CE.JPG', title: 'Play' }] as policy}
					<div class="B4AOutBox">
						<div class="B4ABox">
							<div>
								<img src="/images/{policy.img}" alt={policy.title} class="onw" />
							</div>
							<p class="two">{policy.title}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<!-- Footer -->
</div>
