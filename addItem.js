export const addItem = (e, list, textBox, items, setter) => {
  e.preventDefault()

  if (!textBox.value) {
    return
  }

  const item = textBox.value
  const id = Math.floor(Math.random() * 100000)

  const listItemString = `
    <li class="list-group-item" id="item">
      <div class="d-flex justify-content-between">
        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
        <label class="form-check-label stretched-label" for="firstCheckbox">${item}</label>
        <button type="button" id="${id}" class="btn btn-primary delete-button"
        style="--bs-btn-padding-y: .1rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: 0.75rem; background: none;">
        x
        </button>
      </div>
    </li>
  `
  const range = document.createRange()
  const fragment = range.createContextualFragment(listItemString)

  list.appendChild(fragment)
  items.push({
    k: id,
    v: textBox.value,
  })
  setter(items)
  textBox.value = ''
}
