export const changePage = newPage => {
  return {
    type: 'CHANGE_PAGE',
    payload: newPage
  }
}

export const changeTheme = newTheme => {
  return {
    type: 'CHANGE_THEME',
    payload: newTheme
  }
}