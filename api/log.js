export default function handler(req, res) {
  console.log('YES button clicked! 🎉')
  res.status(200).json({ success: true })
}
