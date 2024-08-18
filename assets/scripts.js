import Animation from './animations.js';

window.onload = function () {

  const container2Contents1 = `
  <div class="container-2-1 h-max">
    <!-- REMOVE KO MUNA CHANGE OF PLANS -->
    <div class="container-2-1-1 w-max b-bot w-auto">
      <div class="container-header w-max">
        <div class="container-nav w-max b-rad">
          <div class="group-1"><i class="fas fa-user icons"></i></div>
          <div class="group-2">
            <p class="title f-weight">Services</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-2-1-2 w-max">
      <!-- insert the contents depending on what is selected in the Navitems -->
      <div class="container-body w-max h-auto">
        <div class="container-cover w-auto animate-cards-2">
          <video class="container-vid" autoplay loop muted>
            <source src="./assets/videos/cover.mp4" type="video/mp4">
          </video>
        </div>
        <div class="pad-1 w-max h-max container-contents">
          <div class="container-profile w-max h-auto animate-cards-1">
            <div class="group-1 h-auto">
              <div class="container-profile-img w-max h-max">
                <img class="container-img" src="./assets/images/profile.png">
              </div>
            </div>
            <div class="group-2 h-auto">
              <div class="name">
                <p class="title f-2 f-weight animate-cards-5">Giervan Melendres Sabalbero</p>
              </div>
              <div class="curr-pos"><i>Student | Aspiring Web Developer | Freelance Graphic
                  Designer
                </i> </div>
              <div class="container-apps h-auto">
                <a href="https://www.facebook.com/profile.php?id=100083830490295"
                  target="_blank">
                  <img class="container-img-small" src="./assets/images/profile.png">
                </a>
                <img class="container-img-small" src="./assets/images/profile.png">
                <img class="container-img-small" src="./assets/images/profile.png">
                <img class="container-img-small" src="./assets/images/profile.png">
              </div>
            </div>
          </div>
          <div class="container-layer-1 h-auto w-max">
            <div class="column-1">
              <div class="container-bio bg-w animate-cards">
                <p class="f-weight f-center">Bio</p>
                <hr>
                <p class="f-center">I am a motivated and adaptive learner. I am knowledgeable of
                  multimedia
                  software
                  applications. With experience, I could say that I can help in terms of
                  producing
                  graphic designs and publication materials to boost market engagement both
                  online
                  and offline.</p>
              </div>
              <div class="container-skills bg-w animate-cards">
                <p class="f-weight f-center">Skills</p>
                <hr>
                <div class="container-skill-sets">
                  <div class="skill-set">
                    <div class="group-1">
                      <img class="container-img-mid" src="./assets/images/profile.png">
                    </div>
                    <div class="group-2">
                      <p class="f-weight">Graphic Designer</p>
                      <p>Proficient in creating visually appealing designs and graphics
                        for various mediums, including logos, brochures, and websites.
                      </p>
                    </div>
                  </div>
                  <div class="skill-set">
                    <div class="group-1">
                      <img class="container-img-mid" src="./assets/images/profile.png">
                    </div>
                    <div class="group-2">
                      <p class="f-weight">Full Stack Web Developer</p>
                      <p>Proficient in developing complete web applications, from
                        front-end user interfaces to back-end server-side logic, with
                        expertise in languages such as JavaScript, HTML/CSS, and
                        frameworks like React and Angular.</p>
                    </div>
                  </div>
                                    <div class="skill-set">
                    <div class="group-1">
                      <img class="container-img-mid" src="./assets/images/profile.png">
                    </div>
                    <div class="group-2">
                      <p class="f-weight">Layout Artist</p>
                      <p>Skilled in designing and laying out publication materials such as
                        magazines, newspapers, brochures, and books, with expertise in
                        typography, visual storytelling, and print production.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column-2">
              <div class="container-highlights bg-w animate-cards">
                <p class="f-weight f-center">Tools</p>
                <hr>
                <div class="card-1">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
  const container2Contents2 = `
<div class="container-2-1 h-max">
  <!-- REMOVE KO MUNA CHANGE OF PLANS -->
  <div class="container-2-1-1 w-max b-bot w-auto">
    <div class="container-header w-max">
      <div class="container-nav w-max b-rad">
        <div class="group-1"><i class="fas fa-user icons"></i></div>
        <div class="group-2">
          <p class="title f-weight">Experience</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum. </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-2-1-2 w-max">
    <!-- insert the contents depending on what is selected in the Navitems -->
    <div class="container-body w-max h-auto">
      <div class="container-cover w-auto animate-cards-2">
        <video class="container-vid" autoplay loop muted>
          <source src="./assets/videos/cover.mp4" type="video/mp4">
        </video>
      </div>
      <div class="pad-1 w-max h-max container-contents">
        <div class="container-profile w-max h-auto animate-cards-1">
          <div class="group-1 h-auto">
            <div class="container-profile-img w-max h-max">
              <img class="container-img" src="./assets/images/profile.png">
            </div>
          </div>
          <div class="group-2 h-auto">
            <div class="name">
              <p class="title f-2 f-weight animate-cards-5">Giervan Melendres Sabalbero</p>
            </div>
            <div class="curr-pos"><i>Student | Aspiring Web Developer | Freelance Graphic
                Designer
              </i> </div>
            <div class="container-apps h-auto">
              <a href="https://www.facebook.com/profile.php?id=100083830490295"
                target="_blank">
                <img class="container-img-small" src="./assets/images/profile.png">
              </a>
              <img class="container-img-small" src="./assets/images/profile.png">
              <img class="container-img-small" src="./assets/images/profile.png">
              <img class="container-img-small" src="./assets/images/profile.png">
            </div>
          </div>
        </div>
        <div class="container-layer-1 h-auto w-max">
          <div class="column-1">
            <div class="container-bio bg-w animate-cards">
              <p class="f-weight f-center">Bio</p>
              <hr>
              <p class="f-center">I am a motivated and adaptive learner. I am knowledgeable of
                multimedia
                software
                applications. With experience, I could say that I can help in terms of
                producing
                graphic designs and publication materials to boost market engagement both
                online
                and offline.</p>
            </div>
            <div class="container-skills bg-w animate-cards">
              <p class="f-weight f-center">Skills</p>
              <hr>
              <div class="container-skill-sets">
                <div class="skill-set">
                  <div class="group-1">
                    <img class="container-img-mid" src="./assets/images/profile.png">
                  </div>
                  <div class="group-2">
                    <p class="f-weight">Graphic Designer</p>
                    <p>Proficient in creating visually appealing designs and graphics
                      for various mediums, including logos, brochures, and websites.
                    </p>
                  </div>
                </div>
                <div class="skill-set">
                  <div class="group-1">
                    <img class="container-img-mid" src="./assets/images/profile.png">
                  </div>
                  <div class="group-2">
                    <p class="f-weight">Full Stack Web Developer</p>
                    <p>Proficient in developing complete web applications, from
                      front-end user interfaces to back-end server-side logic, with
                      expertise in languages such as JavaScript, HTML/CSS, and
                      frameworks like React and Angular.</p>
                  </div>
                </div>
                                  <div class="skill-set">
                  <div class="group-1">
                    <img class="container-img-mid" src="./assets/images/profile.png">
                  </div>
                  <div class="group-2">
                    <p class="f-weight">Layout Artist</p>
                    <p>Skilled in designing and laying out publication materials such as
                      magazines, newspapers, brochures, and books, with expertise in
                      typography, visual storytelling, and print production.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column-2">
            <div class="container-highlights bg-w animate-cards">
              <p class="f-weight f-center">Tools</p>
              <hr>
              <div class="card-1">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
  const container2Contents3 = `
<div class="container-2-1 h-max">
  <!-- REMOVE KO MUNA CHANGE OF PLANS -->
  <div class="container-2-1-1 w-max b-bot w-auto">
    <div class="container-header w-max">
      <div class="container-nav w-max b-rad">
        <div class="group-1"><i class="fas fa-user icons"></i></div>
        <div class="group-2">
          <p class="title f-weight">Education</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum. </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-2-1-2 w-max">
    <!-- insert the contents depending on what is selected in the Navitems -->
    <div class="container-body w-max h-auto">
      <div class="container-cover w-auto animate-cards-2">
        <video class="container-vid" autoplay loop muted>
          <source src="./assets/videos/cover.mp4" type="video/mp4">
        </video>
      </div>
      <div class="pad-1 w-max h-max container-contents">
        <div class="container-profile w-max h-auto animate-cards-1">
          <div class="group-1 h-auto">
            <div class="container-profile-img w-max h-max">
              <img class="container-img" src="./assets/images/profile.png">
            </div>
          </div>
          <div class="group-2 h-auto">
            <div class="name">
              <p class="title f-2 f-weight animate-cards-5">Giervan Melendres Sabalbero</p>
            </div>
            <div class="curr-pos"><i>Student | Aspiring Web Developer | Freelance Graphic
                Designer
              </i> </div>
            <div class="container-apps h-auto">
              <a href="https://www.facebook.com/profile.php?id=100083830490295"
                target="_blank">
                <img class="container-img-small" src="./assets/images/profile.png">
              </a>
              <img class="container-img-small" src="./assets/images/profile.png">
              <img class="container-img-small" src="./assets/images/profile.png">
              <img class="container-img-small" src="./assets/images/profile.png">
            </div>
          </div>
        </div>
        <div class="container-layer-1 h-auto w-max">
          <div class="column-1">
            <div class="container-bio bg-w animate-cards">
              <p class="f-weight f-center">Bio</p>
              <hr>
              <p class="f-center">I am a motivated and adaptive learner. I am knowledgeable of
                multimedia
                software
                applications. With experience, I could say that I can help in terms of
                producing
                graphic designs and publication materials to boost market engagement both
                online
                and offline.</p>
            </div>
            <div class="container-skills bg-w animate-cards">
              <p class="f-weight f-center">Skills</p>
              <hr>
              <div class="container-skill-sets">
                <div class="skill-set">
                  <div class="group-1">
                    <img class="container-img-mid" src="./assets/images/profile.png">
                  </div>
                  <div class="group-2">
                    <p class="f-weight">Graphic Designer</p>
                    <p>Proficient in creating visually appealing designs and graphics
                      for various mediums, including logos, brochures, and websites.
                    </p>
                  </div>
                </div>
                <div class="skill-set">
                  <div class="group-1">
                    <img class="container-img-mid" src="./assets/images/profile.png">
                  </div>
                  <div class="group-2">
                    <p class="f-weight">Full Stack Web Developer</p>
                    <p>Proficient in developing complete web applications, from
                      front-end user interfaces to back-end server-side logic, with
                      expertise in languages such as JavaScript, HTML/CSS, and
                      frameworks like React and Angular.</p>
                  </div>
                </div>
                                  <div class="skill-set">
                  <div class="group-1">
                    <img class="container-img-mid" src="./assets/images/profile.png">
                  </div>
                  <div class="group-2">
                    <p class="f-weight">Layout Artist</p>
                    <p>Skilled in designing and laying out publication materials such as
                      magazines, newspapers, brochures, and books, with expertise in
                      typography, visual storytelling, and print production.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column-2">
            <div class="container-highlights bg-w animate-cards">
              <p class="f-weight f-center">Tools</p>
              <hr>
              <div class="card-1">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
  const container2Contents4 = `
<div class="container-2-1 h-max">
  <!-- REMOVE KO MUNA CHANGE OF PLANS -->
  <div class="container-2-1-1 w-max b-bot w-auto">
    <div class="container-header w-max">
      <div class="container-nav w-max b-rad">
        <div class="group-1"><i class="fas fa-user icons"></i></div>
        <div class="group-2">
          <p class="title f-weight">Others</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum. </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container-2-1-2 w-max">
    <!-- insert the contents depending on what is selected in the Navitems -->
    <div class="container-body w-max h-auto">
      <div class="container-cover w-auto animate-cards-2">
        <video class="container-vid" autoplay loop muted>
          <source src="./assets/videos/cover.mp4" type="video/mp4">
        </video>
      </div>
      <div class="pad-1 w-max h-max container-contents">
        <div class="container-profile w-max h-auto animate-cards-1">
          <div class="group-1 h-auto">
            <div class="container-profile-img w-max h-max">
              <img class="container-img" src="./assets/images/profile.png">
            </div>
          </div>
          <div class="group-2 h-auto">
            <div class="name">
              <p class="title f-2 f-weight animate-cards-5">Giervan Melendres Sabalbero</p>
            </div>
            <div class="curr-pos"><i>Student | Aspiring Web Developer | Freelance Graphic
                Designer
              </i> </div>
            <div class="container-apps h-auto">
              <a href="https://www.facebook.com/profile.php?id=100083830490295"
                target="_blank">
                <img class="container-img-small" src="./assets/images/profile.png">
              </a>
              <img class="container-img-small" src="./assets/images/profile.png">
              <img class="container-img-small" src="./assets/images/profile.png">
              <img class="container-img-small" src="./assets/images/profile.png">
            </div>
          </div>
        </div>
        <div class="container-layer-1 h-auto w-max">
          <div class="column-1">
            <div class="container-bio bg-w animate-cards">
              <p class="f-weight f-center">Bio</p>
              <hr>
              <p class="f-center">I am a motivated and adaptive learner. I am knowledgeable of
                multimedia
                software
                applications. With experience, I could say that I can help in terms of
                producing
                graphic designs and publication materials to boost market engagement both
                online
                and offline.</p>
            </div>
            <div class="container-skills bg-w animate-cards">
              <p class="f-weight f-center">Skills</p>
              <hr>
              <div class="container-skill-sets">
                <div class="skill-set">
                  <div class="group-1">
                    <img class="container-img-mid" src="./assets/images/profile.png">
                  </div>
                  <div class="group-2">
                    <p class="f-weight">Graphic Designer</p>
                    <p>Proficient in creating visually appealing designs and graphics
                      for various mediums, including logos, brochures, and websites.
                    </p>
                  </div>
                </div>
                <div class="skill-set">
                  <div class="group-1">
                    <img class="container-img-mid" src="./assets/images/profile.png">
                  </div>
                  <div class="group-2">
                    <p class="f-weight">Full Stack Web Developer</p>
                    <p>Proficient in developing complete web applications, from
                      front-end user interfaces to back-end server-side logic, with
                      expertise in languages such as JavaScript, HTML/CSS, and
                      frameworks like React and Angular.</p>
                  </div>
                </div>
                                  <div class="skill-set">
                  <div class="group-1">
                    <img class="container-img-mid" src="./assets/images/profile.png">
                  </div>
                  <div class="group-2">
                    <p class="f-weight">Layout Artist</p>
                    <p>Skilled in designing and laying out publication materials such as
                      magazines, newspapers, brochures, and books, with expertise in
                      typography, visual storytelling, and print production.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column-2">
            <div class="container-highlights bg-w animate-cards">
              <p class="f-weight f-center">Tools</p>
              <hr>
              <div class="card-1">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
                <img class="container-img-mid" src="./assets/images/profile.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

  const container2Contents = `
  <div class="container-2-1 h-max">
    <!-- REMOVE KO MUNA CHANGE OF PLANS -->
    <div class="container-2-1-1 w-max b-bot w-auto">
      <div class="container-header w-max">
        <div class="container-nav w-max b-rad">
          <div class="group-1"><i class="fas fa-user icons"></i></div>
          <div class="group-2">
            <p class="title f-weight">About Me</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-2-1-2 w-max">
      <!-- insert the contents depending on what is selected in the Navitems -->
      <div class="container-body w-max h-auto">
        <div class="container-cover w-auto animate-cards-2">
          <video class="container-vid" autoplay loop muted>
            <source src="./assets/videos/cover.mp4" type="video/mp4">
          </video>
        </div>
        <div class="pad-1 w-max h-max container-contents">
          <div class="container-profile w-max h-auto animate-cards-1">
            <div class="group-1 h-auto">
              <div class="container-profile-img w-max h-max">
                <img class="container-img" src="./assets/images/profile.png">
              </div>
            </div>
            <div class="group-2 h-auto">
              <div class="name">
                <p class="title f-2 f-weight animate-cards-5">Giervan Melendres Sabalbero</p>
              </div>
              <div class="curr-pos"><i>Student | Aspiring Web Developer | Freelance Graphic
                  Designer
                </i> </div>
              <div class="container-apps h-auto">
                <a href="https://www.facebook.com/profile.php?id=100083830490295"
                  target="_blank">
                  <img class="container-img-small" src="./assets/images/profile.png">
                </a>
                <img class="container-img-small" src="./assets/images/profile.png">
                <img class="container-img-small" src="./assets/images/profile.png">
                <img class="container-img-small" src="./assets/images/profile.png">
              </div>
            </div>
          </div>
          <div class="container-layer-1 h-auto w-max">
            <div class="column-1">
              <div class="container-bio bg-w animate-cards">
                <p class="f-weight f-center">Bio</p>
                <hr>
                <p class="f-center">I am a motivated and adaptive learner. I am knowledgeable of
                  multimedia
                  software
                  applications. With experience, I could say that I can help in terms of
                  producing
                  graphic designs and publication materials to boost market engagement both
                  online
                  and offline.</p>
              </div>
              <div class="container-skills bg-w animate-cards">
                <p class="f-weight f-center">Skills</p>
                <hr>
                <div class="container-skill-sets">
                  <div class="skill-set">
                    <div class="group-1">
                      <img class="container-img-mid" src="./assets/images/profile.png">
                    </div>
                    <div class="group-2">
                      <p class="f-weight">Graphic Designer</p>
                      <p>Proficient in creating visually appealing designs and graphics
                        for various mediums, including logos, brochures, and websites.
                      </p>
                    </div>
                  </div>
                  <div class="skill-set">
                    <div class="group-1">
                      <img class="container-img-mid" src="./assets/images/profile.png">
                    </div>
                    <div class="group-2">
                      <p class="f-weight">Full Stack Web Developer</p>
                      <p>Proficient in developing complete web applications, from
                        front-end user interfaces to back-end server-side logic, with
                        expertise in languages such as JavaScript, HTML/CSS, and
                        frameworks like React and Angular.</p>
                    </div>
                  </div>
                                    <div class="skill-set">
                    <div class="group-1">
                      <img class="container-img-mid" src="./assets/images/profile.png">
                    </div>
                    <div class="group-2">
                      <p class="f-weight">Layout Artist</p>
                      <p>Skilled in designing and laying out publication materials such as
                        magazines, newspapers, brochures, and books, with expertise in
                        typography, visual storytelling, and print production.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column-2">
              <div class="container-highlights bg-w animate-cards">
                <p class="f-weight f-center">Tools</p>
                <hr>
                <div class="card-1">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                  <img class="container-img-mid" src="./assets/images/profile.png">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

  // Define the icons, titles, and descriptions in an array
  const navItems = [
    {
      class: 'about-me',
      icon: 'fas fa-user',
      title: 'About Me',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      class: 'services',
      icon: 'fas fa-gears services',
      title: 'Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      class: 'experience',
      icon: 'fas fa-briefcase',
      title: 'Experience',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      class: 'education',
      icon: 'fas fa-school',
      title: 'Education',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      class: 'others',
      icon: 'fas fa-info',
      title: 'Others',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];
  const searchInput = document.querySelector('.search');
  const container = document.querySelector('.container-1-1-3');

  function animateCards() {
    const cardElements = document.querySelectorAll('.animate-cards');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInBottom', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateCards1() {
    const cardElements = document.querySelectorAll('.animate-cards-1');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInLeft', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateContainer1() {
    const cardElements = document.querySelectorAll('.animate-container-1');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInLeft', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateCards4() {
    const cardElements = document.querySelectorAll('.animate-cards-4');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInRight', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateContainer2() {
    const cardElements = document.querySelectorAll('.animate-container-2');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInRight', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateCards2() {
    const cardElements = document.querySelectorAll('.animate-cards-2');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'slideInTop', { duration: 500, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateCards3() {
    const cardElements = document.querySelectorAll('.animate-cards-3');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'blurIn', { duration: 1000, easing: 'ease-in-out' });
      animate.animate();
    });
  }

  function animateCards5() {
    const cardElements = document.querySelectorAll('.animate-cards-5');
    cardElements.forEach((element) => {
      const animate = new Animation(element, 'typewrite', {
        typingSpeed: 100,
        loop: true,
        typeBy: 'char',
        loopDelay: 1000,
      });
      animate.animate();
    });
  }

  function insertContainer2Contents() {
    const container2 = document.querySelector('.container-2');
    container2.innerHTML = container2Contents;
  }

  function insertContainer2Contents1() {
    const container2 = document.querySelector('.container-2');
    container2.innerHTML = container2Contents1;
  }

  function insertContainer2Contents2() {
    const container2 = document.querySelector('.container-2');
    container2.innerHTML = container2Contents2;
  }

  function insertContainer2Contents3() {
    const container2 = document.querySelector('.container-2');
    container2.innerHTML = container2Contents3;
  }

  function insertContainer2Contents4() {
    const container2 = document.querySelector('.container-2');
    container2.innerHTML = container2Contents4;
  }

  // Function to populate the container with nav items
  function populateContainer(navItems) {
    container.innerHTML = ''; // clear the container

    navItems.forEach((item) => {
      const navItem = document.createElement('div');

      navItem.classList.add('container-nav', 'w-max', 'b-rad', 'hover-1', item.class);

      const group1 = document.createElement('div');
      group1.classList.add('group-1');
      const icon = document.createElement('i');
      const iconClasses = item.icon.split(' '); // Split the icon string into an array of classes
      iconClasses.forEach((cls) => {
        icon.classList.add(cls); // Add each class individually
      });
      icon.classList.add('icons');
      group1.appendChild(icon);

      const group2 = document.createElement('div');
      group2.classList.add('group-2', 'remove');
      const title = document.createElement('p');
      title.classList.add('title', 'f-weight');
      title.textContent = item.title;
      const description = document.createElement('p');
      description.textContent = item.description;
      group2.appendChild(title);
      group2.appendChild(description);

      navItem.appendChild(group1);
      navItem.appendChild(group2);

      container.appendChild(navItem);

      // Get the elements with the class you want to click
      const clickableElements = document.querySelectorAll('.about-me');

      // Add an event listener to each element
      clickableElements.forEach((element) => {
        element.addEventListener('click', () => {
          // Insert the container2Contents into the .container-2 element
          insertContainer2Contents();

          // Animate the insertion of the contents
          animateCards();
          animateCards1();
          animateCards2();
          animateCards3();
          animateCards4();
          animateCards5();
        });
      });

      // Get the elements with the class you want to click
      const clickableElements2 = document.querySelectorAll('.experience');

      // Add an event listener to each element
      clickableElements2.forEach((element) => {
        element.addEventListener('click', () => {
          // Insert the container2Contents into the .container-2 element
          insertContainer2Contents2();

          // Animate the insertion of the contents
          animateCards();
          animateCards1();
          animateCards2();
          animateCards3();
          animateCards4();
          animateCards5();
        });
      });

      // Get the elements with the class you want to click
      const clickableElements3 = document.querySelectorAll('.education');

      // Add an event listener to each element
      clickableElements3.forEach((element) => {
        element.addEventListener('click', () => {
          // Insert the container2Contents into the .container-2 element
          insertContainer2Contents3();

          // Animate the insertion of the contents
          animateCards();
          animateCards1();
          animateCards2();
          animateCards3();
          animateCards4();
          animateCards5();
        });
      });

      // Get the elements with the class you want to click
      const clickableElements4 = document.querySelectorAll('.others');

      // Add an event listener to each element
      clickableElements4.forEach((element) => {
        element.addEventListener('click', () => {
          // Insert the container2Contents into the .container-2 element
          insertContainer2Contents4();

          // Animate the insertion of the contents
          animateCards();
          animateCards1();
          animateCards2();
          animateCards3();
          animateCards4();
          animateCards5();
        });
      });

      const clickableElements1 = document.querySelectorAll('.services');
      // Add an event listener to each element
      clickableElements1.forEach((element) => {
        element.addEventListener('click', () => {
          // Insert the container2Contents into the .container-2 element
          insertContainer2Contents1();
          // Animate the insertion of the contents
          animateCards();
          animateCards1();
          animateCards2();
          animateCards3();
          animateCards4();
          animateCards5();
        });
      });

      const animateGroup1 = new Animation(group1, 'flip', { duration: 500, easing: 'ease-in-out' });
      animateGroup1.animate();

      const animateTitle = new Animation(title, 'typewrite', {
        typingSpeed: 150,
        loop: false,
        typeBy: 'char',
        loopDelay: 2000
      });
      animateTitle.animate();

      const animateDesc = new Animation(description, 'typewrite', {
        typingSpeed: 150,
        loop: false,
        typeBy: 'word',
        loopDelay: 2000
      });
      animateDesc.animate();
    });
  }
  const minimizeButton = document.querySelector('.minimize-button');
  const iconsContainer = document.querySelector('.container-1');
  const container3 = document.querySelector('.container-3');
  let isMinimized = false;
  // Add event listener to hover-2 elements
  const hover2Elements = iconsContainer.querySelectorAll('.hover-1');
  hover2Elements.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
      const siblings = Array.prototype.filter.call(element.parentNode.children, (child) => {
        return child !== element;
      });
      siblings.forEach((sibling) => {
        sibling.classList.add('hover-2-hovered');
      });
    });
    element.addEventListener('mouseout', (event) => {
      const siblings = Array.prototype.filter.call(element.parentNode.children, (child) => {
        return child !== element;
      });
      siblings.forEach((sibling) => {
        sibling.classList.remove('hover-2-hovered');
      });
    });
  });
  minimizeButton.addEventListener('click', () => {
    if (!isMinimized) {
      iconsContainer.classList.add('minimized');
      isMinimized = true;
      // Hide elements with class "remove"
      const removeElements = iconsContainer.querySelectorAll('.remove');
      removeElements.forEach((element) => {
        element.classList.add('hidden');
      });
      // Add class to container-nav elements to override hover styles
      const navItems = iconsContainer.querySelectorAll('.hover-1');
      navItems.forEach((item) => {
        item.classList.add('hover-2');
        item.classList.remove('hover-1');
      });
      // Add center-icon class to elements with f-c class
      const fCElements = iconsContainer.querySelectorAll('.f-c');
      fCElements.forEach((element) => {
        element.classList.add('center-icon');
      });
      const iconElements = iconsContainer.querySelectorAll('.fa-square-minus');
      iconElements.forEach((element) => {
        element.classList.add('fa-expand');
        element.classList.remove('fa-square-minus');
      });
    } else {
      iconsContainer.classList.remove('minimized', 'hover-2-hovered');
      isMinimized = false;
      // Show elements with class "remove"
      const removeElements = iconsContainer.querySelectorAll('.remove');
      removeElements.forEach((element) => {
        element.classList.remove('hidden');
      });
      // Remove class from container-nav elements to restore hover styles
      const navItems = iconsContainer.querySelectorAll('.hover-2');
      navItems.forEach((item) => {
        item.classList.add('hover-1');
        item.classList.remove('hover-2');
      });
      // Remove center-icon class from elements with f-c class
      const fCElements = iconsContainer.querySelectorAll('.f-c');
      fCElements.forEach((element) => {
        element.classList.remove('center-icon');
      });
      const iconElements = iconsContainer.querySelectorAll('.fa-expand');
      iconElements.forEach((element) => {
        element.classList.add('fa-square-minus');
        element.classList.remove('fa-expand');
      });
    }
  });
  searchInput.addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filteredNavItems = navItems.filter((item) => {
      return item.title.toLowerCase().includes(searchQuery);
    });
    populateContainer(filteredNavItems);
  });
  insertContainer2Contents();
  populateContainer(navItems);
  let isContainer3Minimized = false;
  function toggleMinimize() {
    if (window.innerWidth <= 1024) {
      if (!isContainer3Minimized) {
        minimizeButton.click();
        container3.classList.add('minimized');
        isContainer3Minimized = true;
      }
    } else {
      if (isContainer3Minimized) {
        minimizeButton.click();
        container3.classList.remove('minimized');
        isContainer3Minimized = false;
      }
    }
  }
  window.addEventListener('resize', toggleMinimize);
  // Get the elements with the class you want to click

  // Call the function to insert the contents
  // insertContainer2Contents();
  // Populate the container with all nav items initially
  animateContainer1();
  animateContainer2();
  animateCards();
  animateCards1();
  animateCards2();
  animateCards3();
  animateCards4();
  animateCards5();
};