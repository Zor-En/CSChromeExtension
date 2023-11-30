const image = document.getElementById('image')
const text = document.getElementById('dad-joke')
const button = document.getElementById('get-stuff')


document.addEventListener('DOMContentLoaded', function () {
    button.addEventListener("click", updateImage);
    async function updateImage() {
        fetch('https://api.thecatapi.com/v1/images/search', {
        method: 'GET',
        headers: {
          'x-api-Key': 'live_FtSIM38t7SalCFgJZcxTHt5oAAm27HsmpfNAX4DAqjc9oWMoKv6Msj37mcmwax9k',
          'Accept': 'image/jpg'
        }
      })
        .then((data)=>data.json())
        .then((data)=>{
          data.forEach((e)=>{
            const image = document.getElementById('image')
            image.style.height = "500px"
            image.style.width = "500px"
            image.style.objectFit = "contain"
            image.src = e.url
          })
      })
      fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            'Accept': 'text/plain'
        }
      })
        .then((data)=>data.text())
        .then((data)=>{
          const text = document.getElementById("dad-joke");
          text.innerHTML = data
        })
      }
});


