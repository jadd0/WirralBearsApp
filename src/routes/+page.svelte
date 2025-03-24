<script>
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';

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

<style>
	/* Home Styles CSS */

/* First Bear Animation */
.firstBG {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: #bbbaba;
  z-index: 1000;
}

.firstBear {
  margin: 0;
  object-fit: cover;
  display: block;
  position: absolute;
  z-index: 101;
}

/* Button Styling */
.buttonHolder {
  padding: 10px;
}

.formButton {
  border-radius: 15px;
  cursor: pointer;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.932);
  transition: all 0.4s ease-out;
}

.formButton:hover {
  background-color: rgb(121, 121, 121);
  transform: scale(1.05, 1.05);
}

/* Slider Styling */
.sliderOut {
  padding: 30px 0px 30px 0px;
}

.slider {
  margin: auto;
  border-radius: 10px;
  overflow: hidden;
  border: 7px solid white;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.6);
}

.slides {
  width: 500%;
  height: 20%;
  display: flex;
}

.slides input {
  display: none;
}

.slide {
  width: 20%;
  transition: 2s;
}

.slide img {
  width: 100%;
  height: 100%;
}

/* Manual Slide Navigation */
.navigation-manual {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 40%;
  margin: auto;
  margin-top: -40px;
  left: 0;
  right: 0;
}

.manual-btn {
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
  border: 3px solid white;
  padding: 5px;
}

.manual-btn:not(:last-child) {
  margin-right: 7%;
}

.manual-btn:hover {
  background: #ff0000;
}

#radio1:checked ~ .first {
  margin-left: 0;
}

#radio2:checked ~ .first {
  margin-left: -20%;
}

#radio3:checked ~ .first {
  margin-left: -40%;
}

#radio4:checked ~ .first {
  margin-left: -60%;
}

/* Automatic Navigation */
.navigation-auto {
  position: absolute;
  justify-content: center;
  margin-top: 460px;
  display: flex;
  width: 800px;
}

.navigation-auto div {
  border-radius: 10px;
  transition: 1s;
  border: 3px solid #c43af3;
  padding: 5px;
  width: 30px;
}

.navigation-auto div:not(:last-child) {
  margin-right: 40px;
}

#radio1:checked ~ .navigation-auto .auto-btn1 {
  background: #c43af3;
}

#radio2:checked ~ .navigation-auto .auto-btn2 {
  background: #c43af3;
}

#radio3:checked ~ .navigation-auto .auto-btn3 {
  background: #c43af3;
}

#radio4:checked ~ .navigation-auto .auto-btn4 {
  background: #c43af3;
}

/* Ball For All Section */
.B4AOutBox {
  padding: 10px;
}

.BallForAll {
  display: flex;
  overflow: auto;
  white-space: nowrap;
}

.B4ABox {
  border-radius: 50px;
  border: 2px solid;
  border-color: white;
}

.onw {
  border-radius: 50px;
  padding: 20px;
  width: auto;
  height: 300px;
}

.two {
  margin: 0;
  font-weight: bold;
  margin-top: -10px;
  margin-bottom: 20px;
}

/* Responsive Styles for First Bear */
@media only screen and (max-width: 450px) {
  .firstBear {
    width: 60%;
  }
}

@media only screen and (min-width: 450px) {
  .firstBear {
    width: 40%;
  }
}

</style>