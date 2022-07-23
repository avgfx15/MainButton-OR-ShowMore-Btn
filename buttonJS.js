// Main Button (mainBtn)
const mainBtns = document.querySelectorAll(".mainBtn");

mainBtns.forEach((mainBtn) => {
  let ripple;

  mainBtn.addEventListener("mouseenter", (e) => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;

    ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;

    mainBtn.prepend(ripple);
  });

  mainBtn.addEventListener("mouseleave", () => {
    mainBtn.removeChild(ripple);
  });
});
// End Of Main Button (mainBtn)

// Section 3 Project Page setup

// Projects

const section_3 = document.querySelector(".section_3");
const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");
const projectHideBtn = document.querySelector(".projectHideBtn");

// Project move upword on Mouse Enter and reverce on Mouse Leave

projects.forEach((project, i) => {
  // Project move upword on Mouse Enter

  project.addEventListener("mouseenter", () => {
    project.firstElementChild.style.top = `-${
      project.firstElementChild.offsetHeight - project.offsetHeight + 20
    }px`;
  });

  // Back to Normal view on Mouse Leave

  project.addEventListener("mouseleave", () => {
    project.firstElementChild.style.top = "2rem";
  });

  // On Click Open Project In Big Project Img

  project.addEventListener("click", () => {
    const bigImgWrapper = document.createElement("div");

    bigImgWrapper.className = "projectImgWrapperEffect";

    container.appendChild(bigImgWrapper);

    const bigImg = document.createElement("img");

    bigImg.className = "projectBigImg";

    const imgPath = project.firstElementChild.getAttribute("src").split(".")[0];

    bigImg.setAttribute("src", `${imgPath}-big.jpg`);

    bigImgWrapper.appendChild(bigImg);

    document.body.style.overflowY = "hidden";

    document.removeEventListener("scroll", scrollFunction);

    mouseCircle.style.opacity = 0;

    progressBarFunction(bigImgWrapper);

    bigImgWrapper.onscroll = () => {
      progressBarFunction(bigImgWrapper);
    };

    // Project Hide Button Visible

    projectHideBtn.classList.add("change");

    projectHideBtn.onclick = () => {
      projectHideBtn.classList.remove("change");
      bigImgWrapper.remove();
      document.body.style.overflowY = "scroll";

      document.addEventListener("scroll", scrollFunction);

      progressBarFunction();
    };
    // End Of Project Hide Button Visible
  });
  // End Of On Click Open Project In Big Project Img

  if (i >= 6) {
    project.style.cssText = "display : none; opacity:0 ";
  }
});

// Show More Projects Button

const showMoreProjectsBtn = document.querySelector(".showMoreProjectsBtn");
const showMoreProjectsBtnText = document.querySelector(
  ".showMoreProjectsBtn span"
);

let showHideBool = true;

showMoreProjectsBtn.addEventListener("click", (e) => {
  e.preventDefault();

  showMoreProjectsBtn.firstElementChild.nextElementSibling.classList.toggle(
    "change"
  );

  projects.forEach((project, i) => {
    if (i >= 6) {
      if (showHideBool) {
        setTimeout(() => {
          project.style.display = "flex";
          section_3.scrollIntoView({
            block: "end",
          });
        }, 600);
        setTimeout(() => {
          project.style.opacity = 1;
        }, i * 200);

        showMoreProjectsBtnText.textContent = "Show Less";
      } else {
        setTimeout(() => {
          project.style.display = "none";
          section_3.scrollIntoView({
            block: "end",
          });
        }, 1200);

        setTimeout(() => {
          project.style.opacity = 0;
        }, i * 200);

        showMoreProjectsBtnText.textContent = "Show More";
      }
    }
  });
  showHideBool = !showHideBool;
});
// End Of Show More Projects Button

// End Of Projects

// End Of Section 3 Project Page setup
