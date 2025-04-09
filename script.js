let input = document.querySelector("#nameInput");
let button = document.querySelector(".btn");
let ul = document.querySelector("#nationalityList");

button.addEventListener("click", () => {
    
    ul.innerHTML = "";
    fetch(`https://api.nationalize.io/?name=${input.value}`)
        .then(response => response.json()) // Yaxshiroq nom tanladik
        .then(data => {
            console.log(data);

            let card = document.createElement("li");

            let qiymat = data.country.map(davlat => {
                return `
                    <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${davlat.country_id.toLowerCase()}.svg" alt="">
                    <span>${davlat.country_id}</span>
                    <span>${(davlat.probability * 100).toFixed(2)}%</span> 
                    <br>
                `;
            }).join(''); // Massivni stringga aylantiramiz

            card.innerHTML = qiymat;
            ul.append(card);
        });
        input.value = ''
});
