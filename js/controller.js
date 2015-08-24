(function () {
  'use strict';

  angular
    .module('tiffany')
    .controller('MainController', function ($scope, $routeParams, _, $timeout) {

        $scope.oneAtATime = false;

        //This section defines the carousel and it's content
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        var slides = $scope.slides = [];

        slides.push({
          title: 'Lucius Nelson: Front-End Web Developer',
          image: 'http://images.clipartpanda.com/superhero-clip-art-yioe5BMRT.svg',
          text: '"Tiffany is a superhero who’s day-job is programming. Unbeknownst to her colleagues, she is able to learn and tackle complex problems at rates previously thought impossible for the human mind. Despite her abnormal propensity for mastery, Tiffany is beyond humble as a co-worker. In short, if they ever establish a Justice League of programming, I would nominate Tiffany as a promising up and comer."'
        });
        slides.push({
          title: 'Trevor Glass: Front-End Web Developer',
          image: 'http://jencasper.com/wp-content/uploads/2013/12/Problem-Solving.jpg',
          text: '"Her ability to work through problems and come up with creative solutions is nothing short of amazing. Every task she took on was always clearly communicated and executed with precision, so that it made merging our work seamless. Her work far exceeded that of anyone in our class but she always remained humble."'
        });
        slides.push({
          title: 'Jason Groce: Front-End Web Developer',
          image: 'http://www.jeffruel.info/wp-content/uploads/2013/10/team.jpg',
          text: '"In a group project with Tiffany, she was a good leader and delegator, while still taking on a lot of the actual project itself. She helped work with me to find some answers, too. She was easy to work with and made the project go smoothly, and it put me at ease that she was on the team."'
        });
        console.log("this is slide: ", slides);

        //This section controlls the smooth scroll.
        $(document).ready(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                  var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html, body').animate({ scrollTop: (target.offset().top-$('.header').height()) }, 500);
                    return false;
                  }
                }
            });
        });

    })
})();
