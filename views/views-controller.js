import * as viewsDao from "./views-dao.js"

// find all views
const findViews = async (req, res) => {
    const views = await viewsDao.findAllViews()
    res.json(views)
}

// creates a view
const createView = async (req, res) => {
    const view = req.body
    const currentUser = req.session['currentUser']
    view.viewer = currentUser                       // sets viewer of to current user
    const actualView = await viewsDao.createView(view)
    res.json(actualView)
}

// find all people who seen a media
const findViewsByMedia = async (req, res) => {
    const mid = req.params.mid
    const users = await viewsDao.findViewsByMedia(mid)
    res.json(users)
}

// find all medias a user has seen
const findViewsByUser = async (req, res) => {
    const uid = req.params.uid
    const media = await viewsDao.findViewsByUser(uid)
    if (media) {
        res.json(media)
        return
    }
    res.status(404)
}


// Routes
export default (app) => {
    app.get('/api/views', findViews);
    app.post('/api/views', createView);
    app.get('/api/media/:mid/users', findViewsByMedia); // find all people who seen a media
    app.get('/api/users/:uid/media', findViewsByUser);  // find all media user viewed
}