const toggle=document.querySelector(".js-togg"),btnFa=document.querySelector(".js-fa");let lastScroll=0;const closeBar=()=>{const e=window.pageYOffset;if(0===e)return toggle.classList.add("scrollUp"),void btnFa.classList.add("scrollUp");e>lastScroll&&!toggle.classList.contains("scrollDown")?(toggle.classList.remove("scrollUp"),btnFa.classList.remove("scrollUp"),toggle.classList.add("scrollDown"),btnFa.classList.add("scrollDown")):e<lastScroll&&toggle.classList.contains("scrollDown")&&(toggle.classList.remove("scrollDown"),btnFa.classList.remove("scrollDown"),toggle.classList.add("scrollUp"),btnFa.classList.add("scrollUp")),lastScroll=e,console.log(lastScroll)};window.addEventListener("scroll",closeBar);const btnMenu=document.querySelector(".js-btnMenu"),navContainer=document.querySelector(".js-nav"),navLink=document.querySelector(".js-link"),openNav=()=>{navContainer.classList.contains("hidden")?(navContainer.classList.remove("hidden"),window.addEventListener("scroll",closeNavLink)):navContainer.classList.add("hidden")},closeNavLink=()=>{navContainer.classList.add("hidden")};btnMenu.addEventListener("click",openNav),navLink.addEventListener("click",closeNavLink);const btnEl=document.querySelector(".js-btn"),btnReset=document.querySelector(".js-btn-reset"),numberEl=document.querySelector(".js-number"),clueEl=document.querySelector(".js-clue"),attemptsEl=document.querySelector(".js-attempts");function getRandomNumber(e){return Math.ceil(Math.random()*e)}const random=getRandomNumber(100);function guessNumber(){const e=parseInt(numberEl.value);e<0?writeClue("El número debe estar entre 1 y 100"):e>500?writeClue("Quo vadis?"):e>100?writeClue("El número debe estar entre 1 y 100"):e>random?writeClue("Demasiado alto"):e<random?writeClue("Demasiado bajo"):e===random?writeClue("Has ganado, campeona"):numberEl!==e&&writeClue("Introduce un numero"),NumbersAttempts()}console.log("Mi número aleatorio es "+random);let attemptsMessage=0;function NumbersAttempts(){attemptsMessage++,attemptsEl.innerHTML="Número de intentos: "+attemptsMessage}function writeClue(e){clueEl.innerHTML=e}const resetNumber=()=>{location.reload()};btnEl.addEventListener("click",guessNumber),btnReset.addEventListener("click",resetNumber),numberEl.addEventListener("keydown",(function(e){if(13===(e.keyCode||e.which))return e.preventDefault(),!1}));