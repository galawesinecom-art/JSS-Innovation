/*==================================================
 JSS INNOVATIONS (PTY) LTD
 Professional Website JavaScript
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
      Sticky Navigation
    =========================*/

    const nav = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
            nav.style.background = "#ffffff";

        } else {

            nav.style.boxShadow = "none";
            nav.style.background = "#ffffff";

        }

    });


    /*=========================
      Mobile Menu
    =========================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if(menuBtn){

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("show-menu");

            menuBtn.classList.toggle("active");

            if(menuBtn.classList.contains("active")){

                menuBtn.innerHTML = '<i class="fas fa-times"></i>';

            }else{

                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

            }

        });

    }


    /*=========================
      Counter Animation
    =========================*/

    const counters = document.querySelectorAll(".counter");

    const startCounter = (counter) => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 120;

        const update = () => {

            count += speed;

            if(count < target){

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target + "+";

            }

        };

        update();

    };

    const counterObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                startCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    },{

        threshold:0.5

    });

    counters.forEach(counter=>{

        counterObserver.observe(counter);

    });


    /*=========================
      Scroll Reveal
    =========================*/

    const revealItems = document.querySelectorAll(

        ".service-card,.project-card,.why-card,.testimonial-card,.stat-box,.about-grid,.contact-grid"

    );

    revealItems.forEach(item=>{

        item.style.opacity="0";

        item.style.transform="translateY(40px)";

        item.style.transition="all .8s ease";

    });

    const revealObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0)";

            }

        });

    },{

        threshold:0.2

    });

    revealItems.forEach(item=>{

        revealObserver.observe(item);

    });


    /*=========================
      Smooth Scrolling
    =========================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });


    /*=========================
      Active Navigation Link
    =========================*/

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link=>{

        const href = link.getAttribute("href");

        if(href === currentPage){

            link.classList.add("active");

        }

    });


    /*=========================
      Back To Top Button
    =========================*/

    const topBtn = document.createElement("button");

    topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';

    topBtn.className = "top-btn";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 400){

            topBtn.classList.add("show-top");

        }else{

            topBtn.classList.remove("show-top");

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });


    /*=========================
      Footer Year
    =========================*/

    const year = new Date().getFullYear();

    const yearElement = document.querySelector(".current-year");

    if(yearElement){

        yearElement.textContent = year;

    }

});
