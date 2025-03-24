<script>
  import { onMount } from 'svelte';

</script>

<svelte:head>
  <title>Sponsorship</title>
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png">
  <link rel="manifest" href="/favicon_io/site.webmanifest">
  <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">
  <script src="https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.js"></script>
  <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.css" rel="stylesheet">
</svelte:head>


<a href="/">
  <img src="/images/bears b star1.png" class="bear" alt="Bears logo"/>
</a>

<h1>Our Sponsors</h1>

<p class="sponsorsP">
  We would like to say a special thank you to Taylor Brown Solicitors
  and Chester Financial Wealth Management Ltd. for sponsoring our
  club. Without them our club would be nowhere near it's position
  today.
</p>

<div class="sponsorsDiv">
  <a href="https://taylorbrownsolicitors.com" class="holder">
    <img src="/images/taylor Brown 1.png" alt="Taylor Brown Solicitors" class="tb" />
  </a>
  <a href="https://www.chesterfinancial.co.uk" class="holder">
    <img src="/images/Chester Financial.png" alt="Chester Financial" class="cf" />
  </a>
</div>

<div class="box">
  <div class="insideBox">
    <h1 style="margin-top:10px;">Donate</h1>
    <p>The Wirral Bears Basketball Club are a non-profit organisation - yet money allows us to carry on. Below, there is an option to donate via paypal, which if you feel inclined, would help the club out greatly. Every pound donated goes towards the club to buy balls, kits etc. Thank you.</p>

    <form
      action="https://www.paypal.com/donate"
      method="post"
      target="_top"
      style="margin-top:20px;"
    >
      <input
        type="hidden"
        name="hosted_button_id"
        value="X7RBJZ2S884D8"
      />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_GB/i/btn/btn_donate_LG.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  </div>
</div>


<style>
  /* Sponsorship Styles - Specific to Sponsorship page */

/* Sponsor paragraph styling */
.sponsorsP {
  color: black;
  padding: 0px 30px 0px;
}

/* Sponsors div container */
.sponsorsDiv {
  margin: 0;
  width: 100%;
}

/* Sponsor logos */
.tb, .cf {
  padding: 20px;
  margin: 0;
  margin: auto;
  width: 80%;
}

.holder {
  width: 40%;
}

/* Responsive design for larger screens */
@media only screen and (min-width: 980px) {
  .sponsorsP {
    color: black;
    padding: 0px 100px 0px;
  }
  
  .tb, .cf {
    width: 40%;
  }
}

</style>