        window.addEventListener("load", () => {
            const loader = document.querySelector(".loader");
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        });

        window.addEventListener("scroll", () => {
            const scrollProgress = document.querySelector(".scroll-progress");
            const scrollPercent =
                (window.scrollY /
                    (document.documentElement.scrollHeight - window.innerHeight)) *
                100;
            scrollProgress.style.transform = `scaleX(${scrollPercent / 100})`;

            // Navbar Background
            const navbar = document.querySelector(".navbar");
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });


        gsap.from(".hero-content", {
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: "power4.out",
        });

        gsap.from(".card", {
            scrollTrigger: {
                trigger: ".card",
                start: "top center+=100",
                toggleActions: "play none none reverse",
            },
            duration: 1,
            y: 100,
            opacity: 0,
            stagger: 0.2,
            ease: "power4.out",
        });
