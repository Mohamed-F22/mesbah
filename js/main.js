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
// data
data = {
    "reelsSrcInfo" : [
        "https://www.youtube.com/embed/tq919y-4Q-I",
        "https://www.youtube.com/embed/cqak0XTvrCQ",
        "https://www.youtube.com/embed/jKf4mKYU6Dk",
        "https://www.youtube.com/embed/iOpHzGuqTWQ",
        "https://www.youtube.com/embed/HeO8I9KRjaE",
        "https://www.youtube.com/embed/97fnSRYdJ6A",
        "https://www.youtube.com/embed/JTgp7iJL38E"
    ],
    "reelsChromaSrcInfo" : [
        "https://www.youtube.com/embed/exMdzs1XDNw",
        "https://www.youtube.com/embed/ktAm94ZEXyE",
        "https://www.youtube.com/embed/Z-wcX13vLtY",
        "https://www.youtube.com/embed/YrRkju7sDKA",
        "https://www.youtube.com/embed/tfw-mta4b5c",
        "https://www.youtube.com/embed/EMhH3ci6mzE"
    ],
    "popupInfo" : [
        {
            "title": "AI Influencers",
            "source": "https://www.youtube-nocookie.com/embed/Z60rpgu_cJ8?si=nCt-hxgY4zOvz-RL",
            "type": "reel"
        },
        {
            "title": "Mohamed Mansour",
            "source": "https://www.youtube-nocookie.com/embed/S3TscRKFb5A?si=AjgD28WTaEmii9y5",
            "type": "nvideo"
        },
        {
            "title": "EGYPTIAN Civilization",
            "source": "https://www.youtube-nocookie.com/embed/qlH02k-VZMc?si=kyOwVXpTTIOBdgls",
            "type": "nvideo"
        },
        {
            "title": "دكتور جامعي",
            "source": "https://www.youtube.com/embed/dOO9AS__y0s",
            "type": "reel"
        },
        {
            "title" : "Digital Marketing",
            "source" : "https://www.youtube.com/embed/3p9icSBXSjo",
            "type" : "reel"
        },
        {
            "title" : "Dentist",
            "source" : "https://www.youtube.com/embed/bK98_8ThsKQ",
            "type" : "reel"
        },
        {
            "title": "Life Development",
            "source": "https://www.youtube.com/embed/zsOxgUHQHHw",
            "type": "reel"
        },
        {
            "title": "Saif Boyka",
            "source": "https://www.youtube-nocookie.com/embed/GNxATNds4jo?si=807o0Na1pGMONums",
            "type": "nvideo"
        },
        {
            "title": "Boxing",
            "source": "https://www.youtube-nocookie.com/embed/QhLbHM_QJzg?si=b3EuK2yRggtzaiou",
            "type": "nvideo"
        },
        {
            "title": "Kickboxing 🥊💪",
            "source": "https://www.youtube.com/embed/E99m2TLGjTA?si=OXJYxV4yWCKXwWzT",
            "type": "nvideo"
        },
        {
            "title": "speaker_محاضر",
            "source": "https://www.youtube.com/embed/LPMeia341_s",
            "type": "reel"
        },
        {
            "title": "Brilliant Academy",
            "source": "https://www.youtube-nocookie.com/embed/zoQ3eI0MUVU?si=E7OztITSrdV4pjT5",
            "type": "nvideo"
        },
        {
            "title": "Universe",
            "source": "https://www.youtube-nocookie.com/embed/V4rljWMaZzM?si=XpyqxBksJbUCIclN",
            "type": "nvideo"
        },
        {
            "title": "EGYPTIAN Civilization",
            "source": "https://www.youtube-nocookie.com/embed/qlH02k-VZMc?si=kyOwVXpTTIOBdgls",
            "type": "nvideo"
        },
        {
            "title": "EGYPTIAN Civilization Montage",
            "source": "https://www.youtube.com/embed/XApkpf87KiA",
            "type": "reel"
        },
        {
            "title": "Mr Ahmed",
            "source": "https://www.youtube-nocookie.com/embed/97fnSRYdJ6A?si=dYcCGxz2d-snKgyB&amp",
            "type": "reel"
        },
        {
            "title": "Mrs Rania",
            "source": "https://www.youtube-nocookie.com/embed/YrRkju7sDKA?si=RdLMKKsPXV8pPBkg",
            "type": "nvideo"
        },
        {
            "title": "Mrs Amany",
            "source": "https://www.youtube-nocookie.com/embed/HeO8I9KRjaE?si=pQosxx7ecPaQVD9F",
            "type": "reel"
        },
        {
            "title": "Conference",
            "source": "https://www.youtube-nocookie.com/embed/sX6Fg0em9J0?si=0DjeM1TGnJ-qL3MG",
            "type": "nvideo"
        },
        {
            "title": "Hourse",
            "source": "https://www.youtube-nocookie.com/embed/5dUrbZHruTM?si=tToWF9cMYHwsflwb",
            "type": "nvideo"
        },
        {
            "title": "Mohamed Kamal",
            "source": "https://www.youtube-nocookie.com/embed/Iofp8jMbvRw?si=-YXU3QlGKn32CIcI",
            "type": "nvideo"
        },
        {
            "title": "Community",
            "source": "https://www.youtube-nocookie.com/embed/sGYcmFLPD88?si=yR6-OPshdtCrjffw",
            "type": "nvideo"
        },
        {
            "title": "Podcast Reel",
            "source": "https://www.youtube.com/embed/ImMGU_8jRXQ",
            "type": "reel"
        },
        {
            "title": "نوع اخر من مونتاج الريلز",
            "source": "https://www.youtube.com/embed/M9WTTpMcuOo",
            "type": "reel"
        },
    ]
}
// reels slider
let reelsSrc = data.reelsSrcInfo
let leftIcon = document.querySelector(".reels .container .icon-left")
let rightIcon = document.querySelector(".reels .container .icon-right")
let reels = document.querySelector(".reels .reels-container .slider iframe")

if (reels !== null) {
    let i = 0
    reels.setAttribute("src", `${reelsSrc[i]}`)
    rightIcon.onclick = function () {
        if (i === (reelsSrc.length - 1)) {
            i = 0
            reels.setAttribute("src", `${reelsSrc[i]}`)
        }else {
            i = i + 1
            reels.setAttribute("src", `${reelsSrc[i]}`)
        }
    }
    leftIcon.onclick = function () {
        if (i === 0) {
            i = (reelsSrc.length - 1)
            reels.setAttribute("src", `${reelsSrc[i]}`)
        }else {
            i = i - 1
            reels.setAttribute("src", `${reelsSrc[i]}`)
        }
    }
}
// chroma slider
let reelsChromaSrc = data.reelsChromaSrcInfo
let leftIconCh = document.querySelector(".reels-chroma .container .icon-left")
let rightIconCh = document.querySelector(".reels-chroma .container .icon-right")
let reelsCh = document.querySelector(".reels-chroma .reels-container .slider iframe")

if (reelsCh !== null) {
    let i = 0
    reelsCh.setAttribute("src", `${reelsChromaSrc[i]}`)
    rightIconCh.onclick = function () {
        if (i === (reelsChromaSrc.length - 1)) {
            i = 0
            reelsCh.setAttribute("src", `${reelsChromaSrc[i]}`)
        }else {
            i = i + 1
            reelsCh.setAttribute("src", `${reelsChromaSrc[i]}`)
        }
    }
    leftIconCh.onclick = function () {
        if (i === 0) {
            i = (reelsChromaSrc.length - 1)
            reelsCh.setAttribute("src", `${reelsChromaSrc[i]}`)
        }else {
            i = i - 1
            reelsCh.setAttribute("src", `${reelsChromaSrc[i]}`)
        }
    }
}
// project present type 2
let popupInfo = data.popupInfo
let portbtns = document.querySelectorAll(".portfolio .hover .main-btn")

portbtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let overlay = document.createElement("div")
        overlay.className = "popup-overlay"
        document.body.appendChild(overlay)
        
        let popupBox = document.createElement("div")
        popupBox.className = "popup-box"
        
        let videoIndex = +btn.getAttribute("i") -1
        popupBox.classList.add(popupInfo[videoIndex].type)
        
        let popupHead = document.createElement("h3")
        let popupHeadTxt = document.createTextNode(popupInfo[videoIndex].title)
        
        popupHead.appendChild(popupHeadTxt)
        popupBox.appendChild(popupHead)
        
        let closeIcon = document.createElement("i")
        closeIcon.className = "fa-regular fa-circle-xmark"
        popupBox.appendChild(closeIcon)
        
        let popupVideo = document.createElement("iframe")
        popupVideo.setAttribute("src", popupInfo[videoIndex].source)
        popupVideo.className = popupInfo[videoIndex].type
        popupBox.appendChild(popupVideo)
        document.body.appendChild(popupBox)
    })
})
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("fa-circle-xmark")) {
        e.target.parentNode.remove()
        document.querySelector(".popup-overlay").remove()
    }
})
document.addEventListener("click", function (e) {
    if (document.querySelector(".popup-box") !== null) {
        if (e.target === document.querySelector(".popup-overlay")) {
            document.querySelector(".popup-box").remove()
            document.querySelector(".popup-overlay").remove()
        }
    }
})