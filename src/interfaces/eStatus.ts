enum eStatus {
  Loading = "LOADING", // when the app is fetching data from the server
  Loaded = "LOADED", // when the data has been fetched and converted to a json
  Error = "ERROR", // when we failt to contact the server
}

export default eStatus;
