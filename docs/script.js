const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){return}
        
        entry.target.classList.add("intersecting")
    })
}, {
    root: document.body,
})

window.addEventListener("load", () => {
    document.querySelectorAll(".intersect").forEach(obj => {
        observer.observe(obj)
    })
})
