import React from "react";
// import { Helmet } from "react-helmet";

export default () => (
  <body>
    {/* <!--hero section--> */}

    <header class="hero-section">
      {/* <!--HTML5 Video--> */}
      <video
        autoplay
        loop
        muted
        id="bgvid-hero"
        poster="video/video-hero/poster.jpg"
      >
        <source src="video/video-hero/vb.mp4" type="video/mp4" />
        <source src="video/video-hero/vb.webm" type="video/webm" />
      </video>
      {/* <!--HTML5 Video end--> */}

      <div class="overlay"></div>

      {/* <!--navigation--> */}

      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span> <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#reviews">
              <img class="logo-nav" alt="logo" src="img/logo-nav.svg" />
              <img class="logo-head" alt="logo" src="img/logo-head.svg" />
            </a>
          </div>
          <div class="collapse navbar-collapse" id="bs-navbar-collapse-1">
            <ul class="nav navbar-nav nav-left">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#reviews">
                  <i class="fa fa-sign-in"></i> Login
                </a>
              </li>
              <li>
                <a href="#reviews" class="btn">
                  JOIN US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!--navigation end-->

      <!--welcome message--> */}

      <section class="container text-center welcome-message">
        <div class="row">
          <div class="col-md-12">
            <h1>Startup Landing Page For Your Product</h1>
            <h2>
              Perfect and awesome theme to present your product or service
            </h2>
            <div class="play-btn">
              <a href="https://vimeo.com/109054393" class="play litebox-hero">
                <img src="img/play-btn.png" alt="play" />
              </a>
            </div>
            <div class="cta-btn">
              <a href="#reviews" class="btn">
                GET STARTED
              </a>
              <p>
                <span class="total-number-1">0</span>K Worldwide Signups
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!--welcome message end--> */}
    </header>

    {/* <!--hero section end--> */}

    {/* <!--Featured on--> */}

    <section class="featured-on section-spacing text-center">
      <div class="container">
        <header class="section-header">
          <h2>We Are Featured On</h2>
        </header>
        <div class="row">
          <div class="col-md-12">
            <ul class="featured-sites">
              <li>
                <a href="#reviews" title="Site Name">
                  <img src="img/site-1.png" alt="site" />
                </a>
              </li>
              <li>
                <a href="#reviews" title="Site Name">
                  <img src="img/site-2.png" alt="site" />
                </a>
              </li>
              <li>
                <a href="#reviews" title="Site Name">
                  <img src="img/site-3.png" alt="site" />
                </a>
              </li>
              <li>
                <a href="#reviews" title="Site Name">
                  <img src="img/site-4.png" alt="site" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* <!--Featured on end-->

    <!--benefits--> */}

    <section class="benefits section-spacing text-center" id="features">
      <div class="container">
        <header class="section-header">
          <h2>Main Benefits Of The Product</h2>
          <h3>Reasons why you should choose this product</h3>
        </header>
        <div class="row">
          <div class="col-sm-4">
            <img src="img/benefits-1.png" alt="benefits of product" />
            <h4>Lorem Lpsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div class="col-sm-4">
            <img src="img/benefits-2.png" alt="benefits of product" />
            <h4>Lorem Lpsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div class="col-sm-4">
            <img src="img/benefits-3.png" alt="benefits of product" />
            <h4>Lorem Lpsum</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* <!--benefits end-->

    <!--Features--> */}

    <div class="features section-spacing">
      <div class="container">
        {/* <!--feature 1--> */}

        <div class="row">
          <div class="col-md-7 col-md-push-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="feature"
            />
          </div>
          <div class="col-md-5 col-md-pull-7">
            <article>
              <h2>Excel Level 1: Beginner</h2>
              <p>
                <strong>Description:</strong> Gain a strong foundational
                understanding of Microsoft Office Excel [Year] that immediately
                adds value in your work role and to your organization.
              </p>
              <p>
                <strong>Best fit:</strong> No Prerequisites. Less than 6 months
                of experience.
              </p>
              <p>
                <strong>What to expect: </strong>
              </p>
              <ul>
                <li>Create worksheets & workbooks</li>
                <li>Make modifications</li>
                <li>Perform calculations</li>
                <li>Format and print workbooks</li>
                <li>Manage multiple workbooks</li>
                <li>Work really confidently!</li>
              </ul>
            </article>
          </div>
        </div>

        {/* <!--feature 1 end-->

        <!--feature 2--> */}
        <div class="row">
          <div class="col-md-7 text-center">
            <img
              src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="feature"
            />
          </div>
          <div class="col-md-5">
            <article>
              <h2>Excel Level 2: Intermediate</h2>
              <p>
                <strong>Description:</strong> Gain a strong....
              </p>
              <p>
                <strong>Best fit:</strong> Level 1 Prerequisite Required.
              </p>
              <p>
                <strong>What to expect: </strong>
              </p>
              <ul>
                <li>Create worksheets & workbooks</li>
                <li>???</li>
                <li>???</li>
              </ul>
            </article>
          </div>
        </div>
        {/* <!--feature 2 end-->

        <!--feature 3--> */}
        <div class="row">
          <div class="col-md-7 col-md-push-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt="feature"
            />
          </div>
          <div class="col-md-5 col-md-pull-7">
            <article>
              <h2>Excel Level 3: Advanced</h2>
              <p>
                <strong>Description:</strong> Excel Level 3 is challenging. With
                Deborah’s guidance, you will be thrilled at all the new tips and
                tricks you will learn in this rewarding course. Also included
                from scratch, you will create beautiful dashboards.
              </p>
              <p>
                <strong>Best fit:</strong> Level 2 Prerequisite Required.
              </p>
              <p>
                <strong>What to expect: </strong>
              </p>
              <ul>
                <li>Pivot Tables and Pivot Charts - Slicers</li>
                <li>Chart formatting tips</li>
                <li>Combination charts</li>
                <li>Graphic elements</li>
                <li>Vlookup</li>
                <li>Import data into Excel</li>
                <li>Advance conditional formatting skills</li>
              </ul>
              <a href="#reviews" class="btn btn-features">
                Get Details<i class="fa fa-arrow-right"></i>
              </a>
            </article>
          </div>
        </div>
        {/* <!--feature 3 end--> */}
      </div>
    </div>

    {/* <!--Features end-->

    <!--Video section--> */}

    <section class="video-tour text-center">
      <div class="play-btn">
        <a href="https://vimeo.com/109054393" class="play litebox-tour">
          <img src="img/play-btn-vs.png" alt="play" />
        </a>
        <h2>Video Preview Of Product</h2>
      </div>

      {/* <!--HTML5 Video--> */}
      <video
        autoplay
        loop
        muted
        id="bgvid"
        poster="video/video-preview/poster.jpg"
      >
        <source src="video/video-preview/vb.mp4" type="video/mp4" />
        <source src="video/video-preview/vb.webm" type="video/webm" />
      </video>
      {/* <!--HTML5 Video end--> */}
    </section>

    {/* <!--Video section end-->

    <!--Tour--> */}

    <section class="tour section-spacing text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-8 center-block">
            <h2>
              Learn More About The Product
              <a href="#reviews" class="btn">
                TAKE A TOUR <i class="fa fa-arrow-right"></i>
              </a>
            </h2>
          </div>
        </div>
      </div>
    </section>
    {/* 
    <!--Tour end-->

    <!--reviews--> */}

    <section class="reviews section-spacing" id="reviews">
      <div class="container">
        <header class="section-header text-center">
          <h2>Reviews From Our Users</h2>
          <h3>What our users are saying about the product</h3>
        </header>
        <div class="row">
          <div class="col-sm-4">
            {/* <!--review 1--> */}

            <figure class="text-center">
              <img src="img/review-1.jpg" alt="face" class="img-circle" />
            </figure>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                repellat, voluptatem eveniet et illum itaque excepturi
                repudiandae officiis quibusdam deleniti.
              </p>
              <cite>— Ashley Doe, CEO Abc Organisation</cite>
            </blockquote>

            {/* <!--review 1 end--> */}
          </div>
          <div class="col-sm-4">
            {/* <!--review 2--> */}

            <figure class="text-center">
              <img src="img/review-2.jpg" alt="face" class="img-circle" />
            </figure>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                repellat, voluptatem eveniet et illum itaque excepturi
                repudiandae officiis quibusdam deleniti.
              </p>
              <cite>— John Doe, CEO Abc Organisation</cite>
            </blockquote>

            {/* <!--review 2 end--> */}
          </div>
          <div class="col-sm-4">
            {/* <!--review 3--> */}

            <figure class="text-center">
              <img src="img/review-3.jpg" alt="face" class="img-circle" />
            </figure>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus,
                repellat, voluptatem eveniet et illum itaque excepturi
                repudiandae officiis quibusdam deleniti.
              </p>
              <cite>— Michael Doe, CEO Xyz Organisation</cite>
            </blockquote>

            {/* <!--review 3 end--> */}
          </div>
        </div>
      </div>
    </section>

    {/* <!--reviews end-->

    <!--Pricing--> */}

    <section class="pricing section-spacing text-center" id="pricing">
      <div class="container">
        <header class="section-header">
          <h2>We Provide Flexible Plans</h2>
          <h3>Free signup. 14 days free trial. No credit card required.</h3>
        </header>
        <div class="row">
          <div class="col-md-12">
            {/* <!--PRICE TABLE--> */}
            <div class="plan">
              <div class="plan-details">
                <div class="header">
                  <h4>BASIC</h4>
                </div>
                <div class="price">
                  <span class="currency">$</span>
                  <span class="price-amount">50</span>
                  <span class="period">/ mo</span>
                </div>
                <ul class="plan-features">
                  <li>
                    <span>Free</span> Shipping<i class="fa fa-times"></i>
                  </li>
                  <li>
                    <span>24/7</span> Support<i class="fa fa-check"></i>
                  </li>
                  <li>
                    <span>Single</span> Licence<i class="fa fa-check"></i>
                  </li>
                </ul>
              </div>
              <div class="buy-button">
                <a class="btn" href="#reviews">
                  SIGNUP
                </a>
                <p>5% OFF. Limited time offer.</p>
              </div>
            </div>
            {/* <!--PRICE TABLE END-->

            <!--PRICE TABLE--> */}
            <div class="plan">
              <div class="plan-details">
                <div class="header">
                  <h4>PREMIUM</h4>
                </div>
                <div class="price">
                  <span class="currency">$</span>
                  <span class="price-amount">100</span>
                  <span class="period">/ mo</span>
                </div>
                <ul class="plan-features">
                  <li>
                    <span>Free</span> Shipping<i class="fa fa-check"></i>
                  </li>
                  <li>
                    <span>24/7</span> Support<i class="fa fa-check"></i>
                  </li>
                  <li>
                    <span>Multi</span> Licence<i class="fa fa-check"></i>
                  </li>
                </ul>
              </div>
              <div class="buy-button">
                <a class="btn" href="#reviews">
                  SIGNUP
                </a>
                <p>10% OFF. Limited time offer.</p>
              </div>
            </div>
            {/* <!--PRICE TABLE END--> */}
          </div>
        </div>
      </div>
    </section>

    {/* <!--Pricing end--> */}

    {/* <!--cta section--> */}

    <section class="cta-section section-spacing text-center">
      <div class="container">
        <header class="section-header">
          <h2>Try Launch Today!</h2>
          <h3>
            Limited signup only. Order today before the discount period ends.
          </h3>
        </header>
        <div class="row">
          <div class="col-md-12">
            <a href="#reviews" class="btn">
              GET STARTED
            </a>
            <p>
              Have a question? Give us a call
              <a href="tel:+16582144789"> 658-214-4789</a>.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* <!--cta section end-->

    <!--Team--> */}

    <section class="team section-spacing text-center" id="team">
      <div class="container">
        <header class="section-header">
          <h2>Meet The Team</h2>
          <h3>Folks who created this awesome product</h3>
        </header>
        <div class="row">
          <div class="col-sm-4">
            <div class="team-details">
              <figure>
                <img src="img/team-1.jpg" alt="Team Member" />
                <figcaption>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      rutrum eleifend arcu. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>

                    {/* <!--social--> */}

                    <ul class="social">
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                    </ul>

                    {/* <!--social end--> */}
                  </div>
                </figcaption>
              </figure>
              <div class="team-info">
                <h4>John Doe</h4>
                <h5>UI/UX Designer</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-details">
              <figure>
                <img src="img/team-2.jpg" alt="Team Member" />
                <figcaption>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      rutrum eleifend arcu. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>

                    {/* <!--social--> */}

                    <ul class="social">
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                    </ul>

                    {/* <!--social end--> */}
                  </div>
                </figcaption>
              </figure>
              <div class="team-info">
                <h4>Jessica Doe</h4>
                <h5>Front-end Programmer</h5>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="team-details">
              <figure>
                <img src="img/team-3.jpg" alt="Team Member" />
                <figcaption>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      rutrum eleifend arcu. Lorem ipsum dolor sit amet
                      consectetur.
                    </p>

                    {/* <!--social--> */}

                    <ul class="social">
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i class="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                    </ul>

                    {/* <!--social end--> */}
                  </div>
                </figcaption>
              </figure>
              <div class="team-info">
                <h4>Tom Doe</h4>
                <h5>Business Relations</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!--Team end-->

    <!--Twitter feed --> */}

    <div class="twitter-feed section-spacing text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-10 center-block">
            <div class="twitter-icon">
              <i class="fa fa-twitter"></i>
            </div>
            <div class="tweet"></div>
          </div>
        </div>
      </div>
    </div>

    {/* <!--Twitter feed end -->

    <!--contact us--> */}

    <section class="contact section-spacing text-center" id="contact">
      <div class="container">
        <header class="section-header">
          <h2>Contact Us</h2>
          <h3>Have any questions? Get in touch</h3>
        </header>
      </div>

      {/* <!--map--> */}
      <div class="map">
        <div id="map-canvas"></div>
      </div>
      {/* <!--map end--> */}
    </section>

    {/* <!--contact us end--> */}

    {/* <!--sub-form--> */}
    <section class="sub-form section-spacing text-center">
      <div class="container">
        <header class="section-header">
          <h2>Subscribe To Our Newsletter</h2>
          <h3>
            Subscribe to get monthly products updates and exclusive offers
          </h3>
        </header>
        <div class="row">
          <div class="col-md-6 center-block col-sm-11">
            <form id="mc-form">
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email Address"
                  required
                  id="mc-email"
                />
                <span class="input-group-btn">
                  <button type="submit" class="btn btn-default">
                    SUBSCRIBE <i class="fa fa-envelope"></i>
                  </button>
                </span>
              </div>
              <label for="mc-email" id="mc-notification"></label>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* <!--sub-form end-->

    <!--site-footer--> */}
    <footer class="site-footer section-spacing text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <p class="footer-links">
              <a href="#reviews">Terms of Use</a>{" "}
              <a href="#reviews">Privacy Policy</a>
            </p>
          </div>
          <div class="col-md-4">
            <small>&copy; 2015 Launch. All rights reserved.</small>
          </div>
          <div class="col-md-4">
            {/* <!--social--> */}

            <ul class="social">
              <li>
                <a href="https://twitter.com/" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/" target="_blank">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank">
                  <i class="fa fa-youtube-play"></i>
                </a>
              </li>
            </ul>

            {/* <!--social end--> */}
          </div>
        </div>
        {/* <!--chat-btn--> */}
        <a
          href="#reviews"
          class="chat-btn"
          data-toggle="modal"
          data-target="#modal-contact-form"
        ></a>
        {/* <!--chat-btn end--> */}
      </div>
    </footer>
    {/* <!--site-footer end--> */}

    {/* <!--contact form modal--> */}

    <div class="modal fade" id="modal-contact-form" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="modal-body">
            {/* <!--contact form--> */}

            <div class="contact-form text-center">
              <header class="section-header">
                <img src="img/support-icon.svg" alt="support icon" />
                <h2>Contact us</h2>
                <h3>Have any questions? Send us a message.</h3>
              </header>
              <form class="cta-form" action="php/contact.php" method="post">
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="contact-name form-control input-lg"
                    placeholder="Name *"
                    id="contact-name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="email"
                    class="contact-email form-control input-lg"
                    placeholder="Email address *"
                    id="contact-email"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    class="contact-message form-control input-lg"
                    rows="4"
                    placeholder="Message *"
                    id="contact-message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="antispam"
                    placeholder="Antispam question: 7 + 5 = ?"
                    class="contact-antispam form-control input-lg"
                    id="contact-antispam"
                  />
                </div>
                <button type="submit" class="btn">
                  SEND MESSAGE
                </button>
              </form>
            </div>

            {/* <!--contact form end--> */}

            <p class="contact-form-success">
              <i class="fa fa-check"></i>
              <span>Thanks for contacting us!</span> We will get back to you
              very soon.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* <!--contact form modal end--> */}

    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/jquery.animateNumber.min.js"></script>
    <script src="js/waypoints-sticky.min.js"></script>
    <script src="js/retina.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/jquery.ajaxchimp.min.js"></script>
    <script src="js/tweetie.min.js"></script>
    <script src="js/main.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
    <script src="js/gmap.js"></script>
  </body>
);
