<!-- eslint-disable vue/multi-word-component-names -->
<!--
  • Le footer est identique sur toutes les pages.
  • Des icônes avec des liens vers vos réseaux sociaux (GitHub, LinkedIn…)
    :  Ils devront s'ouvrir dans un nouvel onglet.  :: social-medias
  • La date de dernière mise à jour du site         :: class="copyright"
-->

<script>
</script>

<template>
  <footer class="footer">
    <div class="upper">
      <div class="upper-child description">
        <h2>SALOMON KOUASSI</h2>
        <p>
          A passionnate Web & Web-mobile Developer building responsive Websites and Web Applications 
        </p>
      </div>

      <div class="upper-child social-links">
        <h2>SOCIALS</h2>
        
        <div class="social-container">
          <a target="_blank" rel="noreferrer" href="https://github.com/SAK-77" class="social-link">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png"
              alt="" class="icon" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/learning/" class="social-link">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png"
              alt="" class="icon" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.figma.com/files/user/1096570112869161197?fuid=1096570112869161197" class="social-link">
            <img src="./icons/figma.png" alt="" class="icon figma" />
          </a>
        </div>
      </div>
    </div>

    <!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) -->
    <div class="bottom">
      &copy; Copyright 2024. Made by 
      <a rel="noreferrer" target="_blank" href="#"> Assoua KOUASSI</a>
    </div>
    
  </footer>
</template>

<style scoped>

  .footer {
    background: #000;
    color: hsl(0, 0%, 100%);
  }

  .upper {
    margin: 2.5rem;
    display: flex;

  }

  .upper-child{
    flex: 1;
    padding: 10px;
    margin-right: 1.3rem;
  }

  .social-links, .social-container{
    text-align: center;
  }

  .social-link{
    margin-left: 2rem;
  }

  .bottom {
    border-top: 1px solid #444;
    margin: 10px;
    padding: 10px;
    color: #eee;
    font-size: 1.2rem;
    text-align: center; 
  }

  h2 {
    font-size: 2.1rem;
    font-weight: bold;
    margin: 0.5rem;
  }

  p {
    color: #eee;
    font-size: 1.1rem;
    line-height: 1.7; 
  }

  .icon {
    width: 2.5rem; 
  }

  .figma{
    background-color: white;
  }
  .bottom a {
    text-decoration: none;
    font-weight: bold;
    margin-left: 2px;
  }
  
</style>