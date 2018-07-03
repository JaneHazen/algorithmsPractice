
function setup() {
    let cards = document.getElementById("card-container");
    console.log(cards);
}

function handleClick(cards, cardId){
    console.log("is this clicking though?")
    for(let i = 0; i < cards.length; i++){
        if(i === cardId){
            cards[i].innerHTML = "up";
        } else {
            cards[i].innerHTML= "down";
        }
    }
}
// Example case.
document.body.innerHTML = `
<table id="card-container">
  <tbody>
    <tr>
      <td class="card">down</td>
      <td class="card">down</td>
    </tr>
    <tr>
      <td class="card">down</td>
      <td class="card">down</td>
    </tr>
  </tbody>
</table>`;

setup();

document.getElementsByClassName("card")[2].click();
console.log(document.body.innerHTML);