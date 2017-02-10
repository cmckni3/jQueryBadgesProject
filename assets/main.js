$(function() {

  // your code will go here
  $.ajax('https://www.codeschool.com/users/cmckni3.json', {
    dataType: 'jsonp',
    success: function(response) {
      var completed_courses = response.courses.completed;
      var course_badges = completed_courses.map(function(course) {
        var badge = document.createElement('div');
        badge.setAttribute('class', 'course');
        return badge;
      }).forEach(function(badge) {
        badges.appendChild(badge);
      });
    },
    error: function(xhr, textStatus, error) {
      console.log(error);
    }
  });

});
