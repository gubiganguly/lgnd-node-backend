import mediaModel from "./media-model.js";

export const findAllMedia = async () =>
    await mediaModel.find()

export const findAllVideos = async () =>
    await mediaModel.find({type: "VIDEO"})

export const findAllAudio = async () =>
    await mediaModel.find({type: "AUDIO"})

export const addMedia = (media) =>
    mediaModel.create(media)

export const findMediaById = (mid) =>
    mediaModel.findById(mid)

export const findMediaByParameter = async (param) =>
    await mediaModel.find(param)

export const deleteMedia = async (mid) =>
    await mediaModel.deleteOne({ _id: mid })

export const updateMedia = async (mid, updates) =>
    await mediaModel.updateOne({ _id: mid },
        { $set: updates })

