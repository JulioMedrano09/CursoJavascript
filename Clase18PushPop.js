//Methods that modify the original array (Mutability).

//push
const countries = ['Bolivia', 'Argentina', 'Uruguay']
const newConstries = countries.push('Ecuador', 'Colombia')
console.log(countries)
console.log(newConstries)

//pop
const removeContry = countries.pop()
console.log(countries)
console.log(removeContry)


//shift()
const colors = ['yellow', 'black', 'red']
const removeColors = colors.shift()

console.log(colors)
console.log(removeColors)

//unshift()
const newColors = colors.unshift('green', 'blue')
console.log(colors)
console.log(newColors)


//splice()
const vegetables = ['carrot', 'brocoli', 'spinach', 'tomato']
const removeVegetables = vegetables.splice(2, 1, 'cucumber', 'onion')

console.log(vegetables)
console.log(removeVegetables)

//reverse()
const numbers = [1, 2, 3, 4, 5]
const reversedNumber = numbers.reverse()

console.log(numbers)
console.log(reversedNumber)

//sort()
const unsortedNumbers1 = [4, 18, 1, 62, 34]
const unicodeSortedNumbers = unsortedNumbers1.sort()

console.log(unsortedNumbers1)
console.log(unicodeSortedNumbers)


const unsortedNumbers2 = [4, 18, 1, 62, 34]
const sortedNumbers = unsortedNumbers2.sort((a, b) => a - b)

console.log(unsortedNumbers2)
console.log(sortedNumbers)

//sort() with string 
const cities = ['Cochabamba', 'La Paz', 'Sucre', 'Beni']
const sortedCities = cities.sort()
console.log(cities)
console.log(sortedCities)

//fill()
const ages = [21, 35, 45, 50]
console.log(ages.fill(0, 2, 4))
console.log(ages.fill(15, 1))
console.log(ages.fill(15))
    ////////////////////////////////////////////////////////////
    //Excercise: Managing a Stack
let bookCart = []
const AddToCartAction = 'addToCart'
const RemoveFromCartAction = 'removeFromCart'
const ViewCartAction = 'viewCart'

function viewCart() {
    console.log('Current Cart  of Books: ', bookCart)
}

function performCartAction(action, newBook) {
    switch (action) {
        case AddToCartAction:
            bookCart.push(newBook)
            break;
        case RemoveFromCartAction:
            if (bookCart.length === 0) {
                console.log('Cart is empty. No books to remove')
            } else {
                const removedBook = bookCart.pop()
                console.log(`Removed book from the cart: ${removedBook}`)
            }
            break;
        case ViewCartAction:
            viewCart()
            break;

        default:
            console.log('Invalid action. Please choose a valid option.')
            break;
    }
}

performCartAction(AddToCartAction, 'The Silmarillon')
performCartAction(ViewCartAction)
performCartAction(AddToCartAction, 'Fall of Gondolin')
performCartAction(ViewCartAction)
performCartAction(RemoveFromCartAction)

//Exercise: Managing a Playlist
function managePlaylist(playlist, newSong) {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ['people equal shit', 'infest', 'infrared']
const newSongToAdd = 'every me every you'
const updatedPlayList = managePlaylist(initialPlaylist, newSongToAdd)

console.log('Initial Playlist: ', initialPlaylist)
console.log('New song to add: ', newSongToAdd)
console.log('Updated playlist: ', updatedPlayList)

//Execise: Card game Implementation 

const deck = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    //Fisher-Yates Algorithm
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }
}

function dealCards(numCard) {
    const dealCards = deck.splice(0, numCard)
    return dealCards
}

shuffleDeck()
const player1Hand = dealCards(3)
const player2Hand = dealCards(3)
const player3Hand = dealCards(3)

console.log('Player 1 Hand: ', player1Hand)
console.log('Player 2 Hand: ', player2Hand)
console.log('Player 3 Hand: ', player3Hand)