// skills Animation
let skills = document.querySelector(".skills-section .skills")

if (skills !== null) {
    window.addEventListener("scroll", function () {
        let skillsOffSetTop = skills.offsetTop;
        let skillsOuterHeight = skills.offsetHeight;
        let windowHeight = this.innerHeight;
        let windowScrollTop = this.scrollY;
        let skillsProgresses = document.querySelectorAll(".skills-section .skills .skill span")
        
        if (windowScrollTop >= skillsOffSetTop + (skillsOuterHeight / 2) - windowHeight) {
            skillsProgresses.forEach(span => {
                span.style.width = span.dataset.progress
            })
        }
    })
}
// animation on load
let landingDivs = document.querySelectorAll(".landing .container .content > div")
if (landingDivs.length > 0) {
    window.onload = function () {
        landingDivs[1].style.right = "0";
        landingDivs[1].style.opacity = "1";
    }
}
// project present
let projectsInfo = [
    {   
        name: "Mohamed Mesbah",
        date: "April 15, 2024",
        location: "Egypt, Fayoum",
        title: "AI Influencers",
        description: "In this captivating video, we explore the striking similarities between real content creators and those generated by artificial intelligence. Through a series of side-by-side comparisons, we examine the nuances and subtleties that blur the lines between human and AI-generated content.Join us on this intriguing journey to understand how AI is transforming the creative landscape and what it means for the future of content creation. Can you spot the difference? Watch and find out!",
        source: "https://www.youtube-nocookie.com/embed/Z60rpgu_cJ8?si=nCt-hxgY4zOvz-RL",
    },
    {
        name: "Islam Ali",
        date: "April 25, 2024",
        location: "Egypt, Fayoum",
        title: "project 2",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/S3TscRKFb5A?si=AjgD28WTaEmii9y5",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/qlH02k-VZMc?si=kyOwVXpTTIOBdgls",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/Jirt79II19Y?si=T1ARbhWhcPtQAKMZ",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/GNxATNds4jo?si=807o0Na1pGMONums",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/QhLbHM_QJzg?si=b3EuK2yRggtzaiou",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/Ms8uThjGMoI?si=uQdIAq9reD0dcIWU",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/sX6Fg0em9J0?si=0DjeM1TGnJ-qL3MG",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/5dUrbZHruTM?si=tToWF9cMYHwsflwb",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/zoQ3eI0MUVU?si=E7OztITSrdV4pjT5",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/cqak0XTvrCQ?si=voNK-RiLtu2mWROm",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/V4rljWMaZzM?si=XpyqxBksJbUCIclN",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/Iofp8jMbvRw?si=-YXU3QlGKn32CIcI",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/sGYcmFLPD88?si=yR6-OPshdtCrjffw",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube.com/embed/3p9icSBXSjo",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube.com/embed/zsOxgUHQHHw",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube.com/embed/XApkpf87KiA",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/97fnSRYdJ6A?si=dYcCGxz2d-snKgyB&amp",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/HeO8I9KRjaE?si=pQosxx7ecPaQVD9F",
    },
    {
        name: "Mostafa Gamal",
        date: "Dec 28, 2023",
        location: "Egypt, Giza",
        title: "project 3",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nihil quidem a excepturi quasi commodi nostrum molestiae inventore itaque, veniam quam aperiam maxime minus corrupti aliquam incidunt praesentium vero sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tenetur culpa neque eaque, ab obcaecati deleniti esse dolorum reiciendis iure soluta nam molestiae totam minima asperiores. Incidunt quos quam dolores.",
        source: "https://www.youtube-nocookie.com/embed/YrRkju7sDKA?si=RdLMKKsPXV8pPBkg",
    },
]
console.log (projectsInfo.length)
let project = document.querySelector(".port-project")

let clientName = document.querySelector(".port-project .client-name")
let projectDate = document.querySelector(".port-project .date")
let projectLocation = document.querySelector(".port-project .location")
let projectTitle = document.querySelector(".port-project h1")
let dateLocation = document.querySelector(".port-project .date-location")
let projectdesc = document.querySelector(".port-project .description")
let video = document.querySelector(".port-project .video-content iframe")

let branchVidLanding = document.querySelector(".branch-landing-vid")


if (project !== null) {
    let projectIndex = project.getAttribute("id") - 1

    let clientNameTxt = projectsInfo[projectIndex].name
    let projectDateTxt = projectsInfo[projectIndex].date
    let projectLocationTxt = projectsInfo[projectIndex].location
    let projectTitleTxt = projectsInfo[projectIndex].title
    let dateLocationTxt = `${projectDateTxt} | ${projectLocationTxt}`
    let projectdescTxt = projectsInfo[projectIndex].description
    video.setAttribute("src", projectsInfo[projectIndex].source)
    
    clientName.innerHTML = clientNameTxt
    projectDate.innerHTML = projectDateTxt
    projectLocation.innerHTML = projectLocationTxt
    projectTitle.innerHTML = projectTitleTxt
    dateLocation.innerHTML = dateLocationTxt
    projectdesc.innerHTML = projectdescTxt

    window.scrollTo({
        top: branchVidLanding.offsetHeight,
        left: 0,
        behavior: 'smooth'
    });
}
// slider

let leftIcon = document.querySelector(".reels .container .icon-left")
let rightIcon = document.querySelector(".reels .container .icon-right")
let slider = document.querySelector(".reels .reels-container .slider")
let reels = document.querySelectorAll(".reels .reels-container .slider iframe")

rightIcon.onclick = function () {
    let computedStyle = window.getComputedStyle(slider);

    let slidingLeft = computedStyle.getPropertyValue("left");
    let slidingLeftValue = parseInt(slidingLeft)

    if (slidingLeftValue > -((reels.length * 340) - 350)) {
        slider.style.left = `${slidingLeftValue - 340}px`
    }
}
leftIcon.onclick = function () {
    let computedStyle = window.getComputedStyle(slider);
    let slidingLeft = computedStyle.getPropertyValue("left");
    let slidingLeftValue = parseInt(slidingLeft)

    if (slidingLeftValue < 0) {
        slider.style.left = `${slidingLeftValue + 340}px`
    }
}

// chroma slider


let reelsChromaSrc = [
    "https://www.youtube.com/embed/exMdzs1XDNw",
    "https://www.youtube.com/embed/ktAm94ZEXyE",
    "https://www.youtube.com/embed/Z-wcX13vLtY",
    "https://www.youtube.com/embed/YrRkju7sDKA",
    "https://www.youtube.com/embed/tfw-mta4b5c",
    "https://www.youtube.com/embed/EMhH3ci6mzE"
]



let leftIconCh = document.querySelector(".reels-chroma .container .icon-left")
let rightIconCh = document.querySelector(".reels-chroma .container .icon-right")
let reelsCh = document.querySelector(".reels-chroma .reels-container .slider iframe")


if (reelsCh !== null) {
    let i = 0
    reelsCh.setAttribute("src", `${reelsChromaSrc[i]}`)
    rightIconCh.onclick = function () {
        if (i === 5) {
            i = 0
            reelsCh.setAttribute("src", `${reelsChromaSrc[i]}`)
        }else {
            i = i + 1
            reelsCh.setAttribute("src", `${reelsChromaSrc[i]}`)
        }
    }
    leftIconCh.onclick = function () {
        if (i === 0) {
            i = 5
            reelsCh.setAttribute("src", `${reelsChromaSrc[i]}`)
        }else {
            i = i - 1
            reelsCh.setAttribute("src", `${reelsChromaSrc[i]}`)
        }
    }
}