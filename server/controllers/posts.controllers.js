import Post from "../models/Post.js"

export const getPosts = async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
}

export const createPost = async(req, res) => {
    const {title, description} = req.body

    const newPost = new Post({title, description})

    await newPost.save() 

    return res.json(newPost)
}

export const updatePost = async(req, res) => {
    console.log(req.params);
    console.log(req.body);

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    console.log(post)
    
    return res.send('received')        
}

export const deletePost = async (req, res) => {
    const postRemoved = await Post.findByIdAndDelete(req.params.id);

    if(!postRemoved) {
        return res.sendStatus(404)
    }

    return res.sendStatus(204)
}

export const getPost = async (req, res) => {
    const post = await Post.findById(req.params.id)
    console.log(post);
    if(!post) {
        return res.sendStatus('not found')
    }
    return res.json(post);
}