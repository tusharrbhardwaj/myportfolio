function toogle_menu(){
    const menu = document.querySelector(".menulinks")
    const icon = document.querySelector(".hamicon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}