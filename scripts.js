document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const hiddenElements = document.querySelectorAll(".hidden-element");
    const profileImage = document.querySelector("#profileImage");

    const onScroll = () => {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 14);
    };

    if (hiddenElements.length) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        hiddenElements.forEach((el, index) => {
            el.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
            observer.observe(el);
        });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (profileImage) {
        profileImage.addEventListener("error", () => {
            profileImage.style.display = "none";
        });
    }
});
