document.addEventListener('DOMContentLoaded', () => {
     const input = document.querySelector("#input")
     const translateBtn = document.querySelector("#translateBtn")
     const output = document.querySelector("#output")
     const email = ("#m18080223@gmail.com")

     
    
    
    async function Translatetext() {
        const text = input.value.trim()
        safeText = encodeURIComponent(text)
        const response = await fetch(url);
        const data = await response.json();
        
        
        
        catContainer.innerHTML = `<img src="${catUrl}" alt="Котик">`
    }
    
});