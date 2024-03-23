<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <a class="anchor" id="about"></a>
  <div class="about">

    <h1> ABOUT ME 👨‍💻</h1>
    <div class="story">
      <h3>WHO AM I ?</h3>
      <p>My name is Salomon KOUASSI, I'm still learning web developement.
        You can see all my projects on the projects section.  
      </p> <br/>
      <p>
        I love learning and I'm always looking to get better day after day.
      </p> <br />
      <p> At the moment I'm looking for an internship opportunity where I can contribute, learn and grow. 
        If you have a good opportunity that matches my skills and experience, contact me.</p>
    </div>

    <div class="skills-info">
      <h3> MY SKILLS </h3>
      <ul class="skills">
        <li class="skill">html</li>
        <li class="skill">css</li>
        <li class="skill">javascript</li>
        <li class="skill">python</li>
        <li class="skill">vuejs</li>
        <li class="skill">node</li>
        <li class="skill">git</li>
        <li class="skill">github</li>
        <li class="skill">vscode</li>
        <li class="skill">linux</li>
      </ul>
    </div>
        
  </div>
</template>

<style scoped>
  a.anchor {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden; 
  }

  a {
    text-decoration: none;
    max-width: 300px;
  }

  .about{
    margin: 2rem;
    padding: 2rem;
    background: #fff;
  }

  h3 {
    margin: 1.5rem;
    font-weight: bold;
    color: #555;
    font-size: 1.5rem;
  }

  .skills{
    padding-left: 2rem;
    list-style: none;
  }

  .skill {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 1rem 1rem;
    margin-right: 2rem;
    margin-bottom: 2rem;

    background: #cabef8;
    color: #666;
    border-radius: 10px;
    font-weight: 5;
    display: inline-flex;
  }

  h1{
    color: black;
    text-align: center;
    font-size: 2.3rem;
    font-weight: bold;
  }

</style>

<script>
</script>
