<template>
  <header>
    <nav>
        <div class="nav-container">
            <input class="checkbox" type="checkbox"/>
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
            <ul class="menu-items">
              <div>
                <h2>Menu</h2>
                <span class="sub-title">fdnd</span>
              </div>
                <img class="purple-separator" src="/img/separator-purple.svg" alt="Separator Purple">
                <li><NuxtLink to="/AllPosts">all posts</NuxtLink></li>
                <li><NuxtLink to="/">talk to me</NuxtLink></li>
                <p>© All Rights Reserved</p>
            </ul>
            <nuxt-link to="/">
              <img class="logo" src="/img/iloveweb-logo.svg" alt="Logo I Love Web">
            </nuxt-link>
        </div>
        <div class="nav-container-responsive" >
          <nuxt-link to="/">
            <img class="logo-responsive" src="/img/iloveweb-logo.svg" alt="Logo I Love Web">
          </nuxt-link>
          <ul class="menu-items-responsive">
            <li><NuxtLink to="/AllPosts">all posts</NuxtLink></li>
            <li><NuxtLink to="/">talk to me</NuxtLink></li>
          </ul>
        </div>
    </nav>
  </header>
</template>

<style scoped>

.nav-container-responsive{
    display: none;
  }

header{
  background-color: var(--primary-color);
}
.nav-container {
  display: block;
  position: relative;
  height: 5rem;
}

.checkbox {
  position: absolute;
  display: block;
  width: 30px;
  height: 30px;
  top: 2.3rem;
  right: 2.5rem;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.hamburger-lines {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  z-index: 1;
  width: 24px;
  height: 20px;
}

.line {
  height: 4px;
  border-radius: 10px;
  background: var(--font-color);
}

.line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.line2 {
  transition: transform 0.2s ease-in-out;
  width: 70%;
  margin-left: auto;
}

.line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.menu-items {
  position: relative;
  padding: 10rem 0rem 0rem 2.5rem;
  height: 100vh;
  width: 100%;
  transform: translate(-150%);
  transition: transform 0.5s ease-in-out;
  text-align: left;
  list-style-type: none;
  background-color: var(--primary-color);
}

.menu-items div{
  display: flex;
  align-items: baseline;
}

.purple-separator{
  padding: 1rem 0rem;
}

a{
  display: flex;
  justify-content: left;
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: -2px;
  color: var(--font-color);
  text-decoration: none;
}

a:hover{
  font-weight: bold;
  color: var(--secondary-color);
}

a:active{
  font-weight: bold;
  color: var(--secondary-color);
}

.logo {
  position: absolute;
  max-width: 7rem;
  top: 2.5rem;
  left: 2.5rem;
}

p{
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
}

.nav-container input[type="checkbox"]:checked ~ .menu-items {
  transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}

.nav-container input[type="checkbox"]:checked ~ .logo{
  display: none;
}

@media (min-width:45rem){
  .nav-container{
    display: none;
  }
  .nav-container-responsive{
    display: flex;
  }

  .logo-responsive{
    max-width: 8rem;
    margin: 3rem 4rem 0rem 3rem;
  }

  .menu-items-responsive{
    display: flex;
    gap: 3rem;
    list-style-type: none;
    gap: 4rem;
    align-items: flex-end;
  }

  .menu-items-responsive a{
    font-size: 1.3rem;
    font-style: italic;
    font-weight: 300;
    letter-spacing: -1px;
    color: var(--font-color);
    text-decoration: none;
  }

  .menu-items-responsive a:hover{
    font-style: italic;
    font-weight: bold;
    color: var(--secondary-color);
  }

  .menu-items-responsive a:active{
    font-style: italic;
    font-weight: bold;
    color: var(--secondary-color);
  }
}

@media (min-width:75rem){
  .logo-responsive{
    margin-left: 5rem;
  }
}

</style>