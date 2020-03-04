module.exports = (model, Schema) => {
  const User = new Schema ({
      name: String,
      email: String,
      phone: String,
      comment: String
  })

  return model('User', User)
}