<script>
  import { onMount } from 'svelte';


</script>

<svelte:head>
  <title>An Inclusive Approach</title>
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png">
  <link rel="manifest" href="/favicon_io/site.webmanifest">
  <link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">
</svelte:head>



<br>
<a href="/">
  <img src="/images/bears b star1.png" class="bear" alt="Bears logo" />
</a>

<h1>We tailor our approach to the young player</h1>

<div class="leftBoxDropdown" id="left box dropdown">
  If a young player enjoys disciplined, challenging training and competitive games, we provide that.<br>
  If a young player enjoys less formal, more relaxed training and games, we provide that. Both are equal to us,
  and we provide a bridge between the two.<br><br>
</div>

<div class="rightBoxDropdown" id="right box dropdown">
  We allow young players to find their own path and place within the game; and will always put their best
  interests at heart.
  A lot of players are put off at first by activities which are, in their eyes, too competitive. Our key is
  working with Young People first, and Basketball second.
</div>

<div style="height: 25px"></div>

<div>
  <div class="box" style="color: white">
    <div class="insideBox">
      <em style="color: white; font-style: bold; font-size: 100%;">We have set up a funding and assurance
        model that:<br></em>
      <p style="color: white;">
        · Ensures high quality coaching<br>
        · Enables participation at all ability levels, including matches<br>
        · Aims for a consistent coach per group, with focused coaching on specific areas
      </p>
    </div>
  </div>
</div>

<div style="height: 30px"></div>

<img src="/images/AZ4A5789.jpg" class="highFiveImage" alt="High five">

<h2 style="margin-top: 20px">Our approach and background</h2>

<div class="boxForThreePara">
  <div class="para1">
    We play half-court, have experienced coaches, often have teachers as coaches and have full coaching
    development and safeguarding programs. We build from the bottom-up, with no favouritism or over focus on
    better players. We don't allow domination of other players and always look to equalise games and
    competitions.
  </div>

  <div class="para2">
    We actively encourage sponsorship or donations, and all our finances are transparent, with all monies going
    towards funding the junior program. We have sponsors for specific aspects of the club e.g. most improved
    player, and if you or your company would like to help, please get in touch.
  </div>

  <div class="para3">
    We can really make a difference with the help and guarantee no favouritism towards your child. We also have
    an associate program, where young players who need some extra help can work for the club in lieu of fees and
    kit costs. Please get in touch if you would like to talk about this.
  </div>
</div>

<div class="footer">
  <div class="footerBox">
    <div class="getInTouchBox">
      <h3>Get In Touch</h3>
      <li> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jaddalkwork@gmail.com">Website Designer:
          Jadd (jaddalkwork@gmail.com)</a></li><br>
      <li> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=icona.photo.service@gmail.com">Photographer:
          Giannis (icona.photo.service@gmail.com)</a></li><br>
      <li> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wirralbears@gmail.com">Club
          (wirralbears@gmail.com)</a></li>
    </div>

    <div class="middle1"><img src="/images/bears big red.png" alt="Bears logo" class="bearFooter"></div>

    <div class="moreInfoBox">
      <h3>More Info</h3>
      <li><a href="https://goo.gl/maps/2dHvRTcbWPFoZLoT6">Woodchurch Location</a></li><br>
      <li><a href="https://goo.gl/maps/Zs2cBJ1htbrRkEcY6">Neston Location</a></li><br>

      <div class="socials">
        <a href="https://facebook.com/WirralBears/"><img src="/images/facebook.png" alt="Facebook" class="facebook"></a>
        <a href="https://instagram.com/wirral_bears_basketball_club?r=nametag"><img src="/images/instagram.png"
            alt="Instagram" class="insta"></a>
      </div>
    </div>
  </div>

  <div class="sponsorsDiv">
    <a href="https://taylorbrownsolicitors.com" class="imgholder">
      <img src="/images/taylor Brown 1.png" alt="Taylor Brown" class="tb" />
    </a>
    <a href="https://www.chesterfinancial.co.uk" class="imgholder">
      <img src="/images/Chester Financial.png" alt="Chester Financial" class="cf" />
    </a>
  </div>
</div>




<style>
  /* AIC Styles - Specific to An Inclusive Approach page */

/* Three-paragraph layout for larger screens */
@media only screen and (min-width: 750px) {
  .boxForThreeParas {
    margin: auto;
    width: 100%;
  }

  .para1,
  .para2,
  .para3 {
    margin-left: 2.5%;
    float: left;
    font-size: 100%;
    width: 30%;
  }
}

/* Three-paragraph layout for smaller screens */
@media only screen and (max-width: 750px) {
  .para1,
  .para2,
  .para3 {
    margin: 0 auto;
    width: 90%;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .boxForThreeParas {
    display: flex;
    place-items: center;
    margin: auto;
  }
}

/* Dropdown boxes */
.leftBoxDropdown,
.rightBoxDropdown {
  width: 90%;
  margin: 0 auto;
}

/* Footer spacing specific to AIC page */
@media only screen and (min-width: 980px) {
  .footer {
    margin-top: 300px;
  }
  
  .middle1 {
    width: 33%;
  }
}

@media only screen and (max-width: 980px) {
  .middle1 {
    width: 100%;
  }
}

</style>