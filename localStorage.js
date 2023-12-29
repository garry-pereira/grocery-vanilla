// export const updateLocalStorage = (list) => {
//   localStorage.setItem('garry.grocery.list.items', JSON.stringify(list))
//   console.log('local storage has been updated')
//   list.map((i) => {
//     console.log(i)
//   })
// }

export const useStorage = (initialState) => {
  // state, initialize
  let groceryStorage = []

  // getter
  const getStorage = () => {
    groceryStorage =
      JSON.parse(localStorage.getItem('garry.grocery.list.items')) || []
    return groceryStorage
  }

  // setter
  const setStorage = (items) => {
    localStorage.setItem('garry.grocery.list.items', JSON.stringify(items))
  }

  return [getStorage, setStorage]
}

// whenever we pass in our localStorage to a function, we should be getting
// the latest version of the localStorage.
// therefore, getStorage should be a function that tries to get the storage
// if there is nothing in the storage, then it should just return a []
