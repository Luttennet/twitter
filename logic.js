 const Tweeter = function (){
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = _posts.length
    let commentIdCounter = 0
    for (let i=0; i<_posts.length; i++){
         commentIdCounter += _posts[i].comments.length
    }
    const getPosts = function () {
        return _posts
    }
    const addPost = function (texts) {
        postIdCounter++
        _posts.push({
           text: texts,
           id: "p"+postIdCounter, 
           comments:[]
        }
        )
    }
    const removePost = function (postID){
        for(const [index, post] of _posts.entries()){
            if (post.id == postID){
                _posts.splice(index,1)
            }
        }
    }
    const addComment = function (texts, postID){
        for(const [index, post] of _posts.entries()){
            if (post.id == postID){
                commentIdCounter++
                _posts[index].comments.push( {id: "c"+commentIdCounter , text: texts})
                
            }
        }
    }
    const removeComment = function (postID, CommentID){
        for(const [index, post] of _posts.entries()){
            if (post.id == postID){
                for(let n=0; n<_posts[index].comments.length; n++){
                    if(_posts[index].comments[n].id == CommentID){_posts[index].comments.splice(n,1)}
                }
            }
        }
    }
    return {
        addPost: addPost,
        getPosts: getPosts,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}

// const tweeter = Tweeter()
// console.log(tweeter.getPosts())
// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// // //This should be added to the posts array:
// // //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// // //There should only be two posts in the post's array:
// // //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// // //{text: "This is my own post!", id: "p3", comments: []}

// // //============================
// // //============================
// // //Stop here
// // //Make sure everything works. Then keep going
// // //============================
// // //============================

// console.log(tweeter.getPosts())
// tweeter.addComment("Damn straight it is!", "p3")
// console.log(tweeter.getPosts())
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// // //This should be added to the third post's comments array:
// // //{id: "c7", text: "Damn straight it is!"}

// // //This should be added to the second post's comments array:
// // //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// // //This comment should be removed:
// // //{id: "c6", text: "Haha second place what a joke."}