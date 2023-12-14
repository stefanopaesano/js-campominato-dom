const randomNumbers = [];
for (let i = 0; i < 16; i++) {
    // Genero un numero casuale
    let bomba = generateRandomNumber(1, 100);
    console.log(bomba);

    // Controllo se questo numero appena generato è già presente nell'array
    let foundInArray = randomNumbers.includes(bomba);
    while (foundInArray == true) {
        bomba = generateRandomNumber(1, 16);
        console.log(bomba);
        foundInArray = randomNumbers.includes(bomba);
    }

    randomNumbers.push(bomba);

    console.log(randomNumbers);
}

console.log(randomNumbers);

/* 
    FUNZIONI
*/
function generateRandomNumber(min, max) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return randNum;
}


let bomba = randomNumbers;

let counter = 0; 

function generateGrid() {
    // Seleziona l'elemento div che conterrà la griglia
    const gameGrid = document.getElementById('game-grid');

    // Pulisce la griglia se è già stata generata in precedenza
    gameGrid.innerHTML = '';

    // Crea la griglia con numeri progressivi da 1 a 100
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = i;
        gameGrid.appendChild(cell);


        // Aggiungi un gestore di eventi 'click' a ciascuna cella
        cell.addEventListener('click', function handleClick() {

            cell.removeEventListener('click', handleClick);
            // Cambia il colore della cella cliccata in azzurro
            
            if (randomNumbers.includes(i)) {
                // Se è una bomba, cambia il colore della cella in rosso
                cell.style.backgroundColor = 'red';
                alert("hai perso")
                
                

            } else {
                // Se non è una bomba, cambia il colore della cella in blu
                cell.style.backgroundColor = 'blue';
                let result= counter++;
                console.log("counter" + counter)

            }

            if (counter == (100 - randomNumbers.length)){
                
                alert("hai vinto " + counter)
            
            }

            // metti un messaggio in console con il numero della cella cliccata
            console.log('Hai cliccato sulla cella numero:', i);
        });

        gameGrid.append(cell);
    }

}