export default function CopyClipBoard(text: string) {
  if (!navigator.clipboard) { return }

  return navigator.clipboard.writeText(text).catch(() => {
		console.error('navigator clipboard: Could not copy text')
  })

}
