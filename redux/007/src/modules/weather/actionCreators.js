const setLoading = (value) => ({
  type: 'FLAGS_SET',
  domain: 'loading',
  payload: value
})

const saveCityData = (city, data) => ({
  type: 'SAVE_CITY_DATA',
  payload: { city, data}
})

export const citySearch = (cityName) => (dispatch, getState) => {
  dispatch(setLoading(true))
  const data = await fetch('...')
  dispatch(sveCityData(cityName, data))
  dispatch(setLoading(false))
}
