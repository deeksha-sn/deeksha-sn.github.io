```javascript
// Smooth navigation for internal links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// Update page title when tab becomes inactive

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {
        document.title = "Come back 👋 | Deeksha SN";
    } else {
        document.title = "Deeksha SN | AI & ML Developer";
    }

});
```
