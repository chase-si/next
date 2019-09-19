export const RequestMock = new Promise((resolve, reject) => {
  setTimeout(() => {
    const testJSON = [
      {id: 1, name: 'chase'},
      {id: 2, name: 'wcs'}
    ]
    resolve(testJSON)
  }, 500)
})

