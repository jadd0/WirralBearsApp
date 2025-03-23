<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { fade, slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  // Type definition for image objects
  type ImageItem = {
    src: string;
    alt?: string;
    id?: string;
  };

  // Define props with TypeScript
  export let images: ImageItem[] = [];
  export let autoplay = true;
  export let duration = 3000;
  export let showControls = true;
  export let showIndicators = true;
  export let height = "400px";
  export let width = "100%";

  let currentIndex = 0;
  let interval: ReturnType<typeof setInterval> | null = null;

  // Calculate the total number of images
  $: totalImages = images.length;

  // Navigate to a specific slide
  function goToSlide(index: number) {
    currentIndex = (index + totalImages) % totalImages;
  }

  // Navigate to the next slide
  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  // Navigate to the previous slide
  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Start autoplay
  function startAutoplay() {
    if (autoplay && totalImages > 1) {
      interval = setInterval(() => {
        nextSlide();
      }, duration);
    }
  }

  // Stop autoplay
  function stopAutoplay() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  // Initialize autoplay on mount
  onMount(() => {
    startAutoplay();
  });

  // Clean up interval on component destruction
  onDestroy(() => {
    stopAutoplay();
  });
</script>

<div 
  class="carousel"
  style="height: {height}; width: {width};"
  on:mouseenter={stopAutoplay}
  on:mouseleave={startAutoplay}
>
  <div class="carousel-container">
    {#each images as image, i}
      {#if i === currentIndex}
        <div 
          class="carousel-slide"
          in:fade={{ duration: 300 }}
          out:fade={{ duration: 300 }}
        >
          <img 
            src={image.src} 
            alt={image.alt || `Slide ${i + 1}`} 
            class="carousel-image"
          />
        </div>
      {/if}
    {/each}
  </div>

  {#if showControls && totalImages > 1}
    <button 
      class="carousel-control prev"
      on:click={prevSlide}
      aria-label="Previous slide"
    >
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </svg>
    </button>
    <button 
      class="carousel-control next"
      on:click={nextSlide}
      aria-label="Next slide"
    >
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </svg>
    </button>
  {/if}

  {#if showIndicators && totalImages > 1}
    <div class="carousel-indicators">
      {#each Array(totalImages) as _, i}
        <button
          class="indicator {i === currentIndex ? 'active' : ''}"
          on:click={() => goToSlide(i)}
          aria-label={`Go to slide ${i + 1}`}
        ></button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .carousel {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .carousel-container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .carousel-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.7);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: background-color 0.3s;
  }

  .carousel-control:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .carousel-control.prev {
    left: 10px;
  }

  .carousel-control.next {
    right: 10px;
  }

  .carousel-control svg {
    fill: #333;
  }

  .carousel-indicators {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 10;
  }

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    padding: 0;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .indicator.active {
    background-color: white;
  }
</style>
