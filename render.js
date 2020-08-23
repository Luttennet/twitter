const Renderer = function (){
    const renderPosts = function (posts){
        $("#posts").empty()
        for (let post of posts){
            let postBox = $(`<div class ='post' data-id = ${post.id}><p class=post-text> ${post.text} </p>
            <div class ='delete'> Delete Post </div></div>`)
            $("#posts").append(postBox)
            for (let comment of post.comments){
                let commentBox = $(`<div class ='comments' data-id = ${comment.id}><span class = 'delete-comment'>X</span>
                <span class=comment-text> ${comment.text} </span></div>`)
                $(`[data-id=${post.id}]`).append(commentBox)
            }
            let commentInput = $(`<input type="text" placeholder="What's your comment to this?"><button>Comment</button>`)
            $(`[data-id=${post.id}]`).append(commentInput)
        }
    }
    return{renderPosts: renderPosts} 
}