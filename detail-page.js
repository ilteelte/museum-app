function submitComment() {
    const inputField = document.getElementById('name')
    console.log("input field:", inputField);
    const name = inputField.value 
    console.log("input name:", name);
    const inputMsg = document.getElementById('msg')
    console.log("input field:", inputMsg);
    const msg = inputMsg.value
    console.log("input message:", msg);
}