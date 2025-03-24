<script>
  import { onMount } from 'svelte';

</script>

<svelte:head>
  <title>Assurances</title>
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png">
  <link rel="manifest" href="/favicon_io/site.webmanifest">
  <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">
  <script src="https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.js"></script>
  <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.0/mapbox-gl.css" rel="stylesheet">
</svelte:head>



<!-- Wirral Bears Banner with link back to Home Page -->
<a href="/">
  <img src="/images/bears b star1.png" class="bear" alt="Bears logo"/>
</a>

<h1>We are a fully aligned club with Basketball England and follow their guidance on how to operate safely.</h1>

<div class="paraHolder">
  <p class="para1">We have full policies on all areas, which are available to on request. We just did not want to overwhelm you with this pack. These policies are: Transporting Children Guidelines, Anti-Bullying Charter, Anti-Bullying Policy, Supervision Ratios, Safeguarding Policy, Social Media Policy, Photography and Video Guidance, Equality Policy, Equal Opportunities Policy, Coach and Parent Conduct Policy.</p>
</div>
    
<img src="/images/AZ4A5625.jpg" alt="Coach Martin" class="martin">

<div class="box" style="margin-top:20px">
  <div class="insideBox">
    <h2 style="color:white">Please follow these safeguarding tips:</h2>
    • If you notice any sudden change in your child's behaviour and have any concerns please speak to a coach or our safeguarding officer, Tom Wilkinson.<br>
    • Don't allow you child to share their personal details with any adults, and don't let adults share them with your child.<br>
    • If you are giving lifts to other children, or your child is getting a lift, please make sure you feel they are safe and if you notice any sudden changes in behaviour from your child or another child, please speak to a coach or our safeguarding officer, Tom Wilkinson.<br>
    • Please ensure your child is safe getting to and coming home from the session. Please also make sure your child is collected on time.<br>
  </div>
</div>

<h2 style="margin-top: 20px">Social Media Use</h2> 

<div class="paraHolder">
  <p class="para1" style="margin-top:-20px">Please encourage your child to use social media responsibly. If there are any issues, please let us know. Often young adults will say things on social media which they would not say in real-life, so it's probably best to keep it to real life.</p>
</div>

<div class="footer">
  <div class="footerBox">
    <div class="getInTouchBox">
      <h3>Get In Touch</h3>
      <li> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jaddalkwork@gmail.com">Website Designer: Jadd (jaddalkwork@gmail.com)</a></li><br>
      <li> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=icona.photo.service@gmail.com">Photographer: Giannis (icona.photo.service@gmail.com)</a></li><br>
      <li> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wirralbears@gmail.com">Club (wirralbears@gmail.com)</a></li>
    </div>

    <div class="middle"><img src="/images/bears big red.png" alt="Bears logo" class="bearFooter"></div>

    <div class="moreInfoBox">
      <h3>More Info</h3>
      <li><a href="https://goo.gl/maps/2dHvRTcbWPFoZLoT6">Woodchurch Location</a></li><br>
      <li><a href="https://goo.gl/maps/Zs2cBJ1htbrRkEcY6">Neston Location</a></li><br>
      
      <div class="socials">
        <a href="https://facebook.com/WirralBears/"><img src="/images/facebook.png" alt="Facebook" class="facebook"></a>
        <a href="https://instagram.com/wirral_bears_basketball_club?r=nametag"><img src="/images/instagram.png" alt="Instagram" class="insta"></a>
      </div>
    </div>
  </div>
  
  <div class="sponsorsDiv">
    <a href="https://taylorbrownsolicitors.com" class="holder">
      <img src="/images/taylor Brown 1.png" alt="Taylor Brown Solicitors" class="tb" />
    </a>
    <a href="https://www.chesterfinancial.co.uk" class="holder">
      <img src="/images/Chester Financial.png" alt="Chester Financial" class="cf" />
    </a>
  </div>
</div>

<style>
  /* Assurances Styles - Specific to Assurances page */

/* Paragraph holder styling */
.paraHolder {
  width: 100%;
  display: flex;
  margin: auto;
}

/* Martin image styling */
.martin {
  width: 95%;
}

/* Box styling specific to assurances page */
.insideBox {
  color: white;
  width: 100%;
  padding: 25px;
  margin: auto;
}

/* Paragraph styling */
.para1 {
  padding: 20px;
}

/* Responsive design for larger screens */
@media only screen and (min-width: 980px) {
  .paraHolder {
    width: 80%;
  }
  
  .martin {
    width: 60%;
  }
}

/* Responsive design for mobile */
@media only screen and (max-width: 980px) {
  .highFiveImage {
    padding: 40px 0px 40px 0px;
  }
  
  .phoneNavHolder {
    min-width: 100%;
    min-height: 40px;
    background-color: #333;
    display: flex;
  }
  
  .left {
    width: 80%;
  }
  
  .dropDown {
    width: 20%;
    color: white;
  }
}

</style>
