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
fetch('../json/details.json')
    .then(function(response) {
        return response.json()
    })
    .then (function(projectsInformation) {
        let projectsInfo = projectsInformation.projectsInfo

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
    })
// reels slider
fetch("../json/details.json")
    .then(function (response) {
        return response.json()
    })
    .then(function (reelsSrcInformation) {
        let reelsSrc = reelsSrcInformation.reelsSrcInfo
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
    })
// chroma slider
fetch("../json/details.json")
    .then(function (response) {
        return response.json()
    })
    .then(function (reelsChromaSrcInformation) {
        let reelsChromaSrc = reelsChromaSrcInformation.reelsChromaSrcInfo
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
    })