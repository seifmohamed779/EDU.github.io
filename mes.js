let myCoursesContainer = document.getElementById("myCoursesContainer");

function renderMyCourses() {

    let myCourses = JSON.parse(localStorage.getItem("myCourses")) || [];

    myCoursesContainer.innerHTML = "";
        if(myCourses.length===0){
        myCoursesContainer.innerHTML=`
        <h1 class="pr">You have not added any courses</h1>`;
        return;
    }
        myCourses.forEach(course => {

        let card = `
        <div class="cardMy">

            <div class="cardheaderMy">
                <img src="${course.img}" alt="">
            </div>

            <div class="cardTitleMy">
                <p>${course.category}</p>
                <h3>${course.title}</h3>
            </div>

            <div class="cardBodyMy">
                <span>⭐ ${course.rating}</span>
                <span>⏱️ ${course.duration} hrs</span>
                <span>📖 ${course.lessons}</span>
            </div>

            <div class="progress-container">
                <p class="progress-text">${course.progress}% complete</p>
                <div class="progress-bg">
                    <div class="progress-fill" style="width: ${course.progress}%"></div>
                </div>
            </div>

            <div class="btnClose">
                <button class="btn-remove" onclick="removeCourse(${course.id})">
                    <span class="icon-x">×</span> Remove Course
                </button>
            </div>

        </div>
        `;

        myCoursesContainer.innerHTML += card;
    });
}

function removeCourse(id) {

    let myCourses = JSON.parse(localStorage.getItem("myCourses")) || [];

    myCourses = myCourses.filter(course => course.id !== id);

    localStorage.setItem("myCourses", JSON.stringify(myCourses));

    renderMyCourses();
}

renderMyCourses();