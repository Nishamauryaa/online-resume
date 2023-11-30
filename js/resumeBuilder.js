/*
This is empty on purpose! Your code to build the resume will go here.
 */
// Object of Bio
var bio = {
    "name": "Nisha Maurya",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "6386612214",
        "email": "samn44330@gmail.com",
        "github": "https://github.com/Nishamauryaa",
        "twitter": "N.A.",
        "linkedin": "https://www.linkedin.com/in/nisha-maurya-041541249",
        "location": "Lucknow"
    },
    "welcomeMessage": "Never Back Down",
    "skills": [ "Html", "Css", "Javascript","Python"],
    "biopic": "images/biopic.jpg"
    // display : function taking no parameters
};

// Function to Display Bio

bio.display = function() {
    // Prepending name as it is to be displayed first.
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLlinkedin.replace("%data%", bio.contacts.linkedin));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};

// Object of Education

var education = {
    "schools": [{
            "name": "National P.G.College,Lucknow",
            "location": "Lucknow",
            "degree": "Bachelor of Science ",
            "majors": ["Mathematics and Statistics"],
            "dates": "2018-2021",
            "url": "https://npgc.in/"
        },
        {
            "name": "ST. Mary's Inter College",
            "location": " Vastu Khand - 2 Gomtinagar (Opp Kathauta, Lucknow, Uttar Pradesh 226010",
            "degree": "Sr. Secondary School",
            "majors": ["PCM"],
            "dates": "2016-2018",
            "url": "https://www.stmarysintercollege.com/"
        },
       
        {
            "name":"OJD Education",
            "location": "Gomti Nagar,Lucknow",
            "degree": "O level",
            "majors": ["Computer Science"],
            "dates": "2022-2023",
            "url": " http://ojdeducation.com/"
        }
    ],
    "onlineCourses": [{
        "title": "Intro to HTML and Css",
        "school": "Udacity",
        "dates": "2016",
        "url": "https:www.udacity.com/course/intro-to-html-and-css--ud304"
    }]
    // display: function taking no parameters
};

// Function to Display Education

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (i = 0; i < education.schools.length; i++) {
        $(".education-entry").append(HTMLschoolName.replace("Click-Here", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree) + HTMLschoolName.replace("#", education.schools[i].url));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    }
    $(".education-entry").append(HTMLonlineClasses);
    for (i = 0; i < education.onlineCourses.length; i++) {
        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
        $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
        $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
    }
};

// Object of Work

var work = {
    "jobs": [{
        "employer": "National P.G.College,Lucknow",
        "title": "Student",
        "location": "Lucknow",
        "dates": "2018 - 2021",
        "description": "I am studying Bachelors of Science"
    }]
    // display: function taking no parameters
};

// Function to Display Work

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        $(".work-entry").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
        $(".work-entry").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        $(".work-entry").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};

// Object of Project

var projects = {
    "projects": [{
            "title": "Animal Trading Card",
            "dates": "25/09/2023-27/09/2023",
            "description": "A simple web page using HTML and CSS",
            "images": ["images/Animal-card.png"]
        },
        {
            "title": "FC Barcelona's Portfolio",
            "dates": "25/10/2023-25/10/2023",
            "description": "A responsive web page using HTML,CSS and javascript",
            "images": ["images/Portfolio.png"]
        }
    ]
    // display: function taking no parameters
};

// Function to Display Work

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (i = 0; i < projects.projects.length; i++) {
        $(".project-entry").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
		projects.projects[i].images.forEach(function(image){
			// format and display 'image'
			$(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));
		});
    }
};

//Adding Google Maps

$("#mapDiv").append(googleMap);

// Function Calls

bio.display();
education.display();
work.display();
projects.display();