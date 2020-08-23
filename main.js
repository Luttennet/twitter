const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())
$("#post").on('click', function () {
    tweeter.addPost($("#input").val())
    $("#input").val("")
    renderer.renderPosts(tweeter.getPosts())
  })

  $("#posts").on('click','.delete', function () {
    tweeter.removePost($(this).closest(".post").data().id)
    renderer.renderPosts(tweeter.getPosts())
  }) 

  $("#posts").on('click','button', function () {
    tweeter.addComment($(this).closest(".post").find("input").val(), $(this).closest(".post").data().id)
    renderer.renderPosts(tweeter.getPosts())
  }) 

  $("#posts").on('click','.delete-comment', function () {
    tweeter.removeComment($(this).closest(".post").data().id, $(this).closest(".comments").data().id)
    renderer.renderPosts(tweeter.getPosts())
  })  