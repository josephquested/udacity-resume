
var formattedName = HTMLheaderName.replace("%data%", "Joseph Quested");
var formattedRole = HTMLheaderRole.replace("%data%", "Fellow");

$("#main").append(["Joseph Quested"]);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var projects = {
  "project": [
    {
    "title" : "Black Market work",
    "dates" : "12/31/43-/12/54/86",
    "description" : "shh, shhh",
    "url" : ["www.pretendURL.com"]
    },
    {
    "title" : "Artschool",
    "dates" : "12/31/43-/12/54/86",
    "description" : "Who knows",
    "url" : ["www.pretendURL.com"]
    },
    {
    "title" : "Cure all deseases",
    "dates" : "12/31/43-/12/54/86",
    "description" : "It's gonna be tricky",
    "url" : ["www.pretendURL.com"]
    },
    {
    "title" : "Battle a bear, barehanded",
    "dates" : "12/31/43-/12/54/86",
    "description" : "The trick is, go for his eyes",
    "url" : ["www.pretendURL.com"]
    }
  ]
};

function DisplayProjects () {
  for (var project in projects.project){
    $('#projects').append(HTMLprojectStart);
    var title = HTMLprojectTitle.replace("%data%",projects.project[project].title);
    var dates = HTMLprojectDates.replace("%data%",projects.project[project].dates);
    var description = HTMLprojectDescription.replace("%data%",projects.project[project].description);

    $('.project-entry:last').append(title, dates, description);
    $('.project-entry:last').children("a").attr("href", projects.project[project].url);
  }
}

var bio = {

  "name" : "Joseph",
  "role" : "Something useful",
  "skills" : [
  "Dancing",
  "Milk",
  "Homeschooling",
  "Friendship",
  "French"
  ],
  "welcomeMessage" : "Hello welcome",
  "biopic" : "images/josephquested.jpg",
  "contacts" : [
    {
      "mobile" : "021235234",
      "email" : "josehquested@goopmaol.com",
      "github" : "josephquested",
      "twitter" : "josephquested",
      "location" : "christchurch"

    }]
};

function DisplayBio() {
  var bioName = HTMLheaderName.replace("%data%", bio.name);
  var role = HTMLheaderRole.replace("%data%", bio.role);
  var image = HTMLbioPic.replace("%data%", bio.biopic);
  console.log(image);
  var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $('#header').prepend(role).prepend(name).append(image, message);
  $('#header').append(HTMLskillsStart);

  for (var skill in bio.skills) {
    var bioSkills = HTMLskills.replace("%data%",bio.skills[skill]);
    $("#skills").append(skills);
  };
  
  var bioSkills = HTMLskills.replace("%data%", bio.skills.join(' ,  ') + ' .');
  $('#skills').append(bioSkills);
  for (var contact in bio.contacts) {
      var bioMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
      var bioEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
      var bioGithub = HTMLgithub.replace("%data%", bio.contacts[contact].github);
      var bioLocation = HTMLlocation.replace("%data%", bio.contacts[contact].location);
      var bioTwitter = HTMLtwitter.replace("%data%", bio.contacts[contact].twitter);
      $('#topContacts').append(bioMobile, bioEmail, bioGithub, bioTwitter, bioLocation);
      $('#footerContacts').append(bioMobile, bioEmail, bioGithub, bioTwitter, bioLocation);
    };
  }

// function CheckSkills() {
//   if (bio.skills != null) {
//   $("#header").append(HTMLskillsStart);
//   var skill1 = HTMLskills.replace("%data%", bio.skills);
//   $("#skills").append(skill1);
//   }
// }

function DisplayEducation() {
  for (var school in education.schools) {
        $('#education').append(HTMLschoolStart);

        var name = HTMLschoolName.replace("%data%", education.schools[school].name);
        var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var location = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var major = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $('.education-entry:last').append(name + degree, dates, location, major);
        $('.education-entry:last').children('a').attr('href',  education.schools[school].url);
    }

    $('#education').append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {

        $('#education').append(HTMLschoolStart);
        var eduOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var eduOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var eduOnlineDate =
            HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var eduURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $('.education-entry:last').append(eduOnlineTitle + eduOnlineSchool, eduOnlineDate, eduURL);
        $('.education-entry:last').children('a').attr('href',  education.onlineCourses[course].url);
    }
}

var education = {
  "schools" : [
  {
  "name" : "School of Apps",
  "location" : "Christchurch",
  "degree" : "Absolutely none",
  "majors" : "Swift",
  "dates" : "23-23-12 - 23-1-65",
  "online courses" : [
  {
    "title" : "Nothing",
    "school" : "Someplace",
    "dates" : "12-234-1 - 12-53-76",
    "url" : "www.somethingsomething.com"
  }]
  }, 
  {
  "name" : "Robot academy",
  "location" : "Christchurch",
  "degree" : "King Of Robots",
  "majors" : "Emotionless distruction",
  "dates" : "23-23-12 - 23-1-65",
  "online courses" : [
  {
    "title" : "Nothing",
    "school" : "Someplace",
    "dates" : "12-234-1 - 12-53-76",
    "url" : "www.somethingsomething.com"
  }]
  }
]};



function LoopJobs() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var description = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(employer + title + dates + description);
  }
}

var work = {
  "jobs": [
    {
      "employer": "Subway",
      "title": "Sandwich Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "The thing is, none of these things actually happened."
    },
    {
      "employer": "KMART",
      "title": "Toy Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "The thing is, none of these things actually happened."
    },
    {
      "employer": "Beatstreet",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "The thing is, none of these things actually happened."
    },
    {
      "employer": "Robot Factory",
      "title": "Beancounter",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "The thing is, none of these things actually happened."
    }
  ]
};

$('document').ready(function() {
 LoopJobs();
 DisplayEducation();
 DisplayBio();
 DisplayProjects();
});

// DisplayWork();

// $(document).click(function(loc) {
//   logClicks(event.pageX, event.pageY);
// });

