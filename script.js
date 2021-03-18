
//creates an array of 30 objects with a value and colour that is returned as the deck
function createDeck(){
    let colours = ["Red", "Black", "Yellow"];
    console.log(colours);
    let nums = [1,2,3,4,5,6,7,8,9,10];
    console.log(nums);
    //creates the array that will hold the deck
    let deck = [];

    //loops through the arrays of colours and numbers and sets the value and colour of each card
    for (let i = 0; i < colours.length; i++) {
        for (let n = 0; n < nums.length; n++) {
            let card = {Colour: colours[i], Value: nums[n]};
            console.log(card);
            //adds the record 'card' with its current value to the array 'deck'
            deck.push(card);

            }
        }

    if(deck.length !== 30){
        console.log(deck);
        deck = [];
        //loops through the arrays of colours and numbers and sets the value and colour of each card
        for (let i = 0; i < colours.length; i++) {
            for (let n = 0; n < nums.length; n++){
                let card = {'Colour' : colours[i], 'Value': nums[n]};
                console.log(card);
                //adds the record 'card' with its current value to the array 'deck'
                deck.push(card);


                }
        }
    }
    //returns the array deck with the 30 records of cards
    return deck;
}

//shuffles the array deck and places each element in a random position
function shuffle(deck) {
    //shuffles through each position and swaps it randomly
    for (let i = deck.length - 1; i > 0; i--) {
        //finds a random position to swap it with from 0 t 29
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }

}

//outputs the card at position "i" in the deck
function display(deck, i) {
    //sets card to element i in deck
    let x, card = "";
    let cards = deck[i];
    //loops through fields and adds each record to the string 'card'
    for(x in cards){
        card += cards[x] + " ";
    }
    //changes the inner html of empty paragraph with id "showCard" the value of card
    document.getElementById("showCard").innerHTML=card;
}

//starting function which invokes all functions to create deck, then shuffle it and display the first card.
function play() {
    //hides the button used to invoke play function
    document.getElementById("start").style.visibility="hidden";
    //creates the deck as a global variable so it can be accessed outside of the function
    var deck = createDeck();
    //shuffles the deck
    shuffle(deck);
    //prints the deck to validate if it has been shuffled or not
    console.log(deck);
    //changes the header that says shuffled deck to introduce first card
    document.getElementById("header1").innerHTML="The First Card is: ";
    //displays the first card
    display(deck, 0)}
    createDeck();

