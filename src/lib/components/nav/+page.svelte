<!-- Navbar.svelte -->
<script>
  // You can add props here if needed, such as active page highlighting
  export let currentPage = '';
</script>

<!-- Desktop Navigation -->
<div class="nav1" id="nav1">
  <div class="navbar" id="navbar">
    <a href="/ballforall" class:active={currentPage === 'ballforall'}>Ball 4 All</a>
    <a href="/assurances" class:active={currentPage === 'assurances'}>Assurance</a>
    <a href="/aninclusiveapproach" class:active={currentPage === 'aninclusiveapproach'}>An Inclusive Approach</a>
    <a href="/sessions" class:active={currentPage === 'sessions'}>Sessions</a>
    <a href="/sponsorship" class:active={currentPage === 'sponsorship'}>Sponsorship</a>
    <a href="/gallery" class:active={currentPage === 'gallery'}>Gallery</a>
    <a href="https://wirral-bears.myspreadshop.co.uk">Shop</a>
  </div>
</div>
<div class="underNav" id="undernav"></div>

<!-- Mobile Navigation -->
<section class="p-menu1">
  <nav id="navbar" class="navigation" role="navigation">
    <input id="toggle1" type="checkbox" />
    <label class="hamburger1" for="toggle1">
      <div class="top"></div>
      <div class="meat"></div>
      <div class="bottom"></div>
    </label>

    <nav class="menu1">
      <a href="/ballforall" class:active={currentPage === 'ballforall'}>Ball 4 All</a>
      <a href="/assurances" class:active={currentPage === 'assurances'}>Assurance</a>
      <a href="/aninclusiveapproach" class:active={currentPage === 'aninclusiveapproach'}>An Inclusive Approach</a>
      <a href="/sessions" class:active={currentPage === 'sessions'}>Sessions</a>
      <a href="/sponsorship" class:active={currentPage === 'sponsorship'}>Sponsorship</a>
      <a href="/gallery" class:active={currentPage === 'gallery'}>Gallery</a>
      <a href="https://wirral-bears.myspreadshop.co.uk">Shop</a>
    </nav>
  </nav>
</section>

<style>
  .active {
    color: white !important;
    font-weight: bold;
  }
</style>
