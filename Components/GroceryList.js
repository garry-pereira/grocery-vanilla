export const groceryListLoader = (listItems) => {
  return `
    <ul class="list-group mt-5" id="grocery-list">
      ${
        listItems.length > 0
          ? listItems
              .map(
                (i) => `<li class="list-group-item" id="item">
      <div class="d-flex justify-content-between">
        <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
        <label class="form-check-label stretched-label" for="firstCheckbox">${i.v}</label>
        <button type="button" id="${i.k}" class="btn btn-primary delete-button"
        style="--bs-btn-padding-y: .1rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: 0.75rem; background: none;">
        x
        </button>
      </div>
    </li>`
              )
              .join('')
          : ''
      }
    </ul>
  `
}
