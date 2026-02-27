module.exports = (req, res) => {
  console.log('🎉 YES BUTTON CLICKED! 🎉')
  res.status(200).json({ message: 'logged' })
}
