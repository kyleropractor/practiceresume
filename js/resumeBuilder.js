var bio = {
    "name": "Kyle Steineman",
    "role": "Web Developer",
    "contacts": {
        "mobile": "260-228-0688",
        "email": "kmsteineman@gmail.com",
        "github": "kyleropractor",
        "twitter": "@kyle_steineman",
        "location": "Minneapolis"
    },
    "welcomeMessage": "Hello world!",
    "skills": [
        "HTML", " CSS", " JavaScript", " jQuery"
    ],
    "biopic": "images/face.jpg",
    "display": "",
};
var data = "%data%";

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedbioPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);



    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedbioPic);
    $("#header").append(HTMLskillsStart);
//    $("#header").append(formattedwelcomeMsg);

    bio.skills.forEach(function(skill){
    var formattedSkills = HTMLskills.replace(data, skill);
    $("#header").append(formattedSkills);
});


    $("#topContacts, #footerContacts").prepend(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
};

bio.display();
var education = {
    "schools": [{
            "name": "Manchester College",
            "location": "North Manchester, IN",
            "degree": "BS",
            "majors": ["Athletic Training"],
            "dates": '2011',
            "url": "http://www.manchester.edu"
        },
        {
            "name": "National University of Health Sciences",
            "location": "Pinellas Park, FL",
            "degree": "Doctorate",
            "majors": ["Chiropractic"],
            "dates": '2015',
            "url": "http://www.nuhs.edu"
        }
    ],
    "onlineCourses": [{
        "title": "Front End Nanodegree",
        "school": "Udacity",
        "dates": '2017',
        "url": "www.udacity.com",
        "url2": "http://udacity.com",
        "url3": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display": ""
};
//for in loop to display education history
education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchool = HTMLschoolName.replace(data, school.name).replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
        var formattedSchoolDegree = formattedSchool + formattedDegree;

        $(".education-entry:last").append(formattedSchoolDegree);

        var formattedDates = HTMLschoolDates.replace(data, school.dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace(data, school.location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace(data, school.majors);
        $(".education-entry:last").append(formattedMajor);
    });

//        $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(school) {

        var formattedonlineTitle = HTMLonlineTitle.replace(data, school.title).replace("#", school.url3);
        var formattedonlineSchool = HTMLonlineSchool.replace(data, school.school);
        var formattedonlineCourse = formattedonlineTitle + formattedonlineSchool;

        $(".education-entry:last").append(formattedonlineCourse);

        var formattedonlineDates = HTMLonlineDates.replace(data, school.dates);
        $(".education-entry:last").append(formattedonlineDates);

        var formattedonlineURL = HTMLonlineURL.replace(data, school.url).replace("#", school.url2);
        $(".education-entry:last").append(formattedonlineURL);
    });
};
education.display();

var work = {
    "jobs": [{
            "employer": "Northwestern Health Sciences University",
            "title": "Sports Nutrition Fellow",
            "dates": "December 2016-Present",
            "description": "I am a fellow concentrating on creating new nutrition research, serving the MN Vixen and MN Freeze with nutrition counseling in the Human Performance Center and serving as clinician in the De Rusha Learning Center as clinician for interns using physical rehab techniques.",
            "location": "Bloomington, MN",
            "url": "http://nwhealth.edu"
        },
        {
            "employer": "North East Chiropractic Center",
            "title": "Associate Chiropractor",
            "dates": "December 2015-December 2016",
            "description": "I served as a chiropractor treating musculoskeletal injuries using nonsurgical, nonpharmaceutical methods to achieve pain relief and increases in function during activities of daily living.",
            "location": "Fort Wayne, IN",
            "url": "http://northeastchirocenter.com/"
        },
    ],
    "display": ""
};
//for in loop to display work history
work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer).replace("#", job.url);
        var formattedTitle = HTMLworkTitle.replace(data, job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace(data, job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedWorkLocation = HTMLworkLocation.replace(data, job.location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedDescription = HTMLworkDescription.replace(data, job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};
work.display();

var projects = {
    "projects": [{
            "title": "Porygon Card",
            "dates": "2017",
            "description": "I used HTML and CSS to create a card to showcase a character’s characteristics",
            "images": ["images/porygon.png"],
            "url": "https://kyleropractor.github.io/porygoncard/"
        },
        {
            "title": "100 Random Colors",
            "dates": "2016",
            "description": "A page with color circles that randomize colors based on hexadecimal color codes made with HTML, CSS and Javascript",
            "images": ["images/colors.png"],
            "url": "https://kyleropractor.github.io/100-Random-Colors/"
        }
    ],
    "display": ""
};
//display projects with encapsulation
projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, project.title).replace("#", project.url);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace(data, project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace(data, project.description);
        $(".project-entry:last").append(formattedDescription);

//forEach for images
        for (i = 0; i < project.images.length; i++) {
        var formattedImage = HTMLprojectImage.replace(data, project.images);
        $(".project-entry:last").append(formattedImage);
      };
  });
};

projects.display();

//count button clicks in locations
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

//change name to international version
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

//google map
$("#mapDiv").append(googleMap);
