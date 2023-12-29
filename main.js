import './bootstrap.css'
import './style.css'
import { addItemFormHTML } from './Components/AddItemForm'
import { groceryListLoader } from './Components/GroceryList'
import { addItem } from './addItem'
import { removeItem } from './removeItem'
import { useStorage } from './localStorage'

const [getLocal, setLocal] = useStorage()

document.querySelector('#app').innerHTML = `
  <div class="container d-flex justify-content-center">
    <div class="thin">
      ${addItemFormHTML}
      ${groceryListLoader(getLocal())}
    </div>
  </div>
`

const groceryList = document.querySelector('#grocery-list')
const inputElement = document.querySelector('#item-input')
const addItemButton = document.querySelector('#button-addon')

addItemButton.addEventListener('click', (e) =>
  addItem(e, groceryList, inputElement, getLocal(), setLocal)
)

groceryList.addEventListener('click', (e) => {
  removeItem(e, groceryList, getLocal(), setLocal)
})
