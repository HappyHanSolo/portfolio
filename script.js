const myTags = [
    'JavaScript', 'CSS', 'HTML', 'React','GitHub', 'git','Firebase','jQuery'
];

var tagCloud = TagCloud('.skillsContent', myTags,{
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true
  }); 

  var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '01A6F0'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.skillsContent').style.color = random_color;