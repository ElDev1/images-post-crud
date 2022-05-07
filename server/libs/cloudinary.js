import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: 'dj35xfo82',
    api_key: '323484764716964', 
    api_secret: "5rUH9QN6AnZsLEIkUGcrTRIUvvU"
})

export const uploadImage = async (filePath) => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    })
}

export const deleteImage = async (id) => {
    return await cloudinary.uploader.destroy(id)
}