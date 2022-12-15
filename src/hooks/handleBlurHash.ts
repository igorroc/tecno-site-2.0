import { encode } from "blurhash"

const loadImage = async (src: string) =>
	new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = () => resolve(img)
		img.onerror = (...args) => reject(args)
		img.src = src
	})

const getImageData = (image: any) => {
	const canvas = document.createElement("canvas")
	canvas.width = image.width
	canvas.height = image.height
	const context = canvas.getContext("2d")

	if (!context) throw new Error("Could not get context")

	context.drawImage(image, 0, 0)
	return context.getImageData(0, 0, image.width, image.height)
}

export const encodeImageToBlurhash = async (imageUrl: string) => {
	const image = await loadImage(imageUrl)
	const imageData = getImageData(image)
	return encode(imageData.data, imageData.width, imageData.height, 7, 7)
}
