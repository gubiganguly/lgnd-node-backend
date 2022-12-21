import viewsModel from "./views-model.js";

export const findAllViews = (view) =>
    viewsModel.find()

export const createView = (view) =>
    viewsModel.create(view)

export const findViewsByMedia = (mid) =>
    viewsModel
        .find({ mid })
        .populate('viewer')
        .exec()

export const findViewsByUser = (user) =>
    viewsModel
        .find({ user })
        .populate('content')
        .exec()