import * as mediaDao from './media-dao.js'

// Add media to db
const addMedia = async (req, res) => {
    const newMedia = req.body;
    const actualMedia = await mediaDao.addMedia(newMedia) // with _id
    res.json(actualMedia)
}

// find all media
const findAllMedia = async (req, res) => {
    const media = await mediaDao.findAllMedia()
    res.json(media)
}

// find all videos
const findAllVideos = async (req, res) => {
    const media = await mediaDao.findAllVideos()
    res.json(media)
}

// find all audio
const findAllAudio = async (req, res) => {
    const media = await mediaDao.findAllAudio()
    res.json(media)
}

// find media by id
const findById = async (req, res) => {
    const mid = req.params.mid
    const media = await mediaDao.findMediaById(mid)
    if (media) {
        res.json(media)
        return
    }
    res.sendStatus(404);
}

// find media by id
const searchByParameter = async (req, res) => {
    const parmeters = req.body
    const media = await mediaDao.findMediaByParameter(parmeters)
    if (media) {
        res.json(media)
        return
    }
    res.sendStatus(404);
}

// find media by id
const updateMedia = async (req, res) => {
    const updates = req.body
    const mid = req.params.mid
    const media = await mediaDao.findMediaById(mid)
    if (media) {
        await mediaDao.updateMedia(mid, updates) 
        res.json(media)
        return
    }
    res.sendStatus(404);
}

// Delete media
const deleteMedia = async (req, res) => {
    const mid = req.params.mid;
    const media = await mediaDao.findMediaById(mid)
    if (media) {
        res.json(media)
        await mediaDao.deleteMedia(mid)
        return
    }
    res.sendStatus(404);
}


// Routes
export default (app) => {
    app.post('/api/media', addMedia);
    app.get('/api/media', findAllMedia);
    app.get('/api/media/videos', findAllVideos);
    app.get('/api/media/audio', findAllAudio);
    app.get('/api/media/:mid', findById);
    app.post('/api/media/search', searchByParameter);
    app.put('/api/media/:mid', updateMedia);
    app.delete('/api/media/:mid', deleteMedia);
}