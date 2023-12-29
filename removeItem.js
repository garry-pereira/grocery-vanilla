export const removeItem = (e, list, items, setter) => {
  if (e.target.type === 'button') {
    const button = document.getElementById(e.target.id)
    const listItem = button.parentNode.parentNode
    list.removeChild(listItem)
    items = items.filter((i) => i.k !== Number(e.target.id))
    setter(items)
  }
}
