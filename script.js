const myTags = [
  'HTML','CSS', 'Javascript', 'jQuery','React', 'Git', 'Github','RESTful APIs', 'Firebase','SASS','VS Code', 'Responsive Websites', 'Web Accessibility' 
];

var tagCloud = TagCloud('.skillContent', myTags,{
    radius: 250,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
  }); 

  var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.skillContent').style.color = random_color;