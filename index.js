/* After a lot of thinking we realized that it would be great to work with something known by most of us, and the answer was clear: BEER.
Luckily, we do know a public API about this topic, called [PUNK API](https://punkapi.com/). The website has the necessary documentation to work with it.
## App needs
Using the data from the provided API, we need the Web app to:
* Display a list of 10 beers with their {
name:
date:
image:
description:
}
* Implement a delete button to delete the beer on your list
* BONUS Add a search bar to search for a beer based on it's title
punkapi.compunkapi.com
Punk API: Brewdog's DIY Dog as an API
Brewdog's DIY Dog as a searchable, filterable API
 */

const ordine = document.getElementsByTagName('ol');
const list = document.getElementsByTagName('li')


const recuperaApi = async() => {
    const response = await fetch('https://api.punkapi.com/v2/beers')
    const data = await response.json();
    const beers = data.slice(0, 10)
   


    beers.forEach(element => {
      console.log(element)
      const list = document.createElement('li');


         
    });




    }
recuperaApi()
