export default async (state, setState, thunk) => {
  try {
    setState({ ...state, loading: true })
    const changed = (await thunk()) || {}
    setState({ ...state, loading: false, ...changed })
  } catch (e) {
    setState({ ...state, loading: false, error: e })
  }
}
