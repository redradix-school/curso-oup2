export default () => {
  let resolve, reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  return Object.assign(promise, { resolve, reject })
}
