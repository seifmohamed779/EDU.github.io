const courses=[
    {id: 1,
    category: "Development",
    title:"Front-End Web Development",
    description:"Learn HTML, CSS, JavaScript and build responsive websites from scratch",
    rating:"4.8",
    lessons:"150",
    subscribers:"1.2k",
    oldPrice: 80,
    price: 50, 
    duration: 45,
    level: "beginner",
    learn: [
     "Build responsive websites from scratch",
     "Master HTML, CSS, and JavaScript",
     "Work with DOM manipulation and events" ],
    progress: 39,
    img: "web.jpg" },
    { id: 2,
    category: "Development",
    title: "JavaScript Advanced Concepts",
    description: "Master closures, promises, async/await and advanced JS patterns",
    rating: "4.7",
    lessons: "120",
    subscribers: "980",
    oldPrice: 60,
    price: 45,
    duration: 40,
    level: "advanced",
    learn: [
     "Understand closures and scope deeply",
     "Master async/await and promises",
     "Work with advanced array methods"],
    progress: 52,
    img: "concepts.jpg" },
    {id: 3,
    category: "Development",
    title: "React.js Complete Guide",
    description: "Build powerful web apps using React, hooks, and modern tools",
    rating: "4.9",
    lessons: "180",
    subscribers: "1.5k",
    oldPrice: 80,
    price: 65,
    duration: 55,
    level: "intermediate",
    learn: [
    "Understand closures and scope deeply",
    "Master async/await and promises",
    "Work with advanced array methods"],
    progress: 40,
    img: "react.jpg" },
    { id: 4,
    category: "Design",
    title: "UI/UX Design Fundamentals",
    description: "Learn design principles, wireframing, and user experience basics",
    rating: "4.6",
    lessons: "90",
    subscribers: "760",
    oldPrice: 50,
    price: 35,
    duration: 30,
    level: "beginner",
    learn: [
     "Understand UI and UX principles",
     "Create wireframes and prototypes",
     "Design user-friendly interfaces"],
    progress: 72,
    img: "UI.jpg" },
    {id: 5,
    category: "Data",
    title: "Python for Data Analysis",
    description: "Analyze data using Python, pandas, and visualization libraries",
    rating: "4.8",
    lessons: "140",
    subscribers: "1.1k",
    oldPrice: 70,
    price: 55,
    duration: 50,
    level: "advanced",
    learn: [
     "Analyze data using pandas library",
     "Create data visualizations",
     "Clean and process datasets"],
    progress: 23,
    img: "python.jpg" },
    {id: 6,
    category: "Business",
    title: "Digital Marketing Mastery",
    description: "Learn SEO, ads, and social media strategies to grow online",
    rating: "4.5",
    lessons: "100",
    subscribers: "890",
    oldPrice: 55,
    price: 40,
    duration: 35,
    level: "beginner",
    learn: [
     "Understand SEO fundamentals",
     "Run social media campaigns",
     "Learn paid advertising strategies" ],
    progress: 65,
    img: "marketing.jpg" },
]       
let courseContainer=document.getElementById("courseContainer")

function cards(){
courses.forEach(function(course){
    let cardhtml=`
     <div class="cardav">
    <div class="card-header">
        <img src="${course.img}" alt="course icon">
    </div>
    <div class="cardav-body">
        <div class="avCat">   
            <p class="category">${course.category}</p>
        </div>
        <h3 class="title">${course.title}</h3>
        <p class="description">${course.description}</p>
        <div class="stats-row">
            <span>⭐ ${course.rating}</span>
            <span>👥 ${course.subscribers}</span>
            <span>⏱️${course.duration} hrs</span>
            <span>📖 ${course.lessons}</span>
        </div>
    </div>    
        <hr class="divider">
        <div class="cardav-footer">
            <div class="price-container">
                <span class="price">$${course.price}</span>
                <span class="old-price">$${course.oldPrice}</span>
            </div>
            <div class="button-group">
                <button class="btn-details" onclick="opendet(${course.id})">Details</button>
                <button class="btn-add" onclick="addToMyCourses(${course.id})">+ Add</button>
            </div>
        </div>        
    </div>
    `;
    courseContainer.innerHTML+=cardhtml;
}
);
};
function opendet(courseId){
    let selectedCourse=''
    for(let i=0;i<courses.length;i++){
        if (courses[i].id==courseId){
            selectedCourse=courses[i];
            break;
        }
    }


let detNow=document.createElement("div");
detNow.id="activeDet";

detNow.innerHTML=`
<div class="det-overlay">
    <div class="det-box">
        <div class="det-header">
        <div class="cls">
            <span class="close-x" onclick="closeDet()">×</span>
        </div>    
            <p class="category-text">${selectedCourse.category}</p>
            <h2>${selectedCourse.title}</h2>
        </div>

        <div class="det-body">
            <p>${selectedCourse.description}</p>
            
            <div class="det-cards">
                <div class="info-item"><span class="spanLabel">LEVEL</span>
                <span class="span2">${selectedCourse.level}</span></div>
                <div class="info-item"><span class="spanLabel">DURATION</span>
                <span class="span2">${selectedCourse.duration} hrs</span></div>
                <div class="info-item"><span class="spanLabel">LESSONS</span>
                <span class="span2">${selectedCourse.lessons}</span></div>
                <div class="info-item"><span class="spanLabel">STUDENTS</span>
                <span class="span2">${selectedCourse.subscribers}</span></div>
                <div class="info-item"><span class="spanLabel">RATING</span>
                <span class="span2">⭐${selectedCourse.rating}</span></div>
                <div class="info-item"><span class="spanLabel">CERTIFICATE</span>
                <span class="span2">Yes</span></div>
            </div>
            <h3 class="learn-title">What You'll Learn</h3>
            <ul class="learn-list">
                 ${selectedCourse.learn.map(item =>`<li>${item}</li>`).join("")}
            </ul>
        </div>
    </div>
</div>`;
document.body.appendChild(detNow);
}
function closeDet(){
    let delDet=document.getElementById("activeDet");
    if (delDet){
        delDet.remove();
    }
}

cards();
function addToMyCourses(courseId) {

    let myCourses = JSON.parse(localStorage.getItem("myCourses")) || [];

    let course = courses.find(c => c.id === courseId);

    let exists = myCourses.find(c => c.id === courseId);

    if (!exists) {
        myCourses.push(course);
        localStorage.setItem("myCourses", JSON.stringify(myCourses));
        renderMyCourses();
        alert("Course added ✔");
    } else {
        alert("Already added ⚠");
    }
}