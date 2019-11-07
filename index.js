console.log("Hello from JS file")

function submitComment(event) {
    event.preventDefault()  //remember!!
    console.log("hello from addcomment fn",event)

// receiving some information from user
    const nameField = (document.getElementById('name'))
    const nameValue = nameField.value
    console.log("name:",nameValue) //.value

    const commentField = (document.getElementById("comment"))
    const commentValue = commentField.value
    console.log("message:",commentValue)
// creating comments
    const commentContainer = document.createElement("div")

    const commentSection = document.getElementById('comments')
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    comment.classList.add('comment')
    h3.innerHTML = `${nameValue} said:`
    p.innerHTML = commentValue






}
const submitButton = document.getElementsByClassName("sendMessageButton")

submitButton[0].addEventListener("click", submitComment);