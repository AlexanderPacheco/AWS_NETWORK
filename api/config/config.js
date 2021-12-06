exports.config = () => {
  if (!process.env.SERVER_ID) {
    process.env.SERVER_ID = `2000${Math.round(Math.random()) * 99999 + 1}`
  }
}
