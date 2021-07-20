let bgImage = document.getElementById("bgImage").value

const saveOptions = document.getElementById("save")

saveOptions.addEventListener("click", saveOptions())

function saveOptions() {
chrome.storage.sync.set({
   userQuery: bgImage
 })
}
