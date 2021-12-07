import React from 'react';
import './styles.css';

// TODO add React components
function App() {
  return (
    <div className="App">
      <body>
        <div className="page">
          <div className="top-section">
            <header className="header">
              <div className="logo">
                <img
                  className="logo__image"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/icon.png"
                  alt="logo"
                />
                <div className="logo__text">
                  <div className="logo__name">Foundation</div>
                  <div className="logo__description">Startup landing template</div>
                </div>
              </div>
              <nav className="navigation">
                <a href="#" className="navigation__item navigation__item_selected">Home</a>
                <a href="#" className="navigation__item">Stories</a>
                <a href="#" className="navigation__item"
                >Library<img
                    className="navigation__arrow"
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/arrow.png"
                  /></a>
              </nav>
              <button className="header__button action-button">Get Started</button>
              <button className="header__menu-button"><span className="header__menu-icon"></span></button>
            </header>

            <section className="headline">
              <div className="headline__content">
                <h1 className="headline__title">Build stunning websites & apps.</h1>
                <p className="headline__description">
                  Create live segments and target the right people for messages based on their
                  behaviors.
                </p>
                <div className="headline__actions">
                  <button className="headline__action-btn action-button">Get Started</button>
                  <button className="headline__learn-more-btn headline__action-btn">Learn More</button>
                </div>
              </div>
              <img
                className="headline__banner"
                src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/ouch.png"
                alt="headline picture"
              />
            </section>
          </div>

          <section className="about">
            <article className="article">
              <h4 className="article__title">What is it about?</h4>
              <p className="article__text">
                Building a website for a startup that looks amazing is not a rocket science anymore.
              </p>
            </article>
            <article className="article">
              <h4 className="article__title">Who is it for?</h4>
              <p className="article__text">
                Startups, small companies and teams, entrepreneurs and web developers.
              </p>
            </article>
          </section>

          <section className="customers">
            <div className="customers__row">
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-nyt.png"
                  alt="New York Times logo"
                />
              </div>
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-forbes.png"
                  alt="Forbes logo"
                />
              </div>
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-apple.png"
                  alt="Apple logo"
                />
              </div>
            </div>
            <div className="customers__row">
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-mashable.png"
                  alt="Marshable logo"
                />
              </div>
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-wsj.png"
                  alt="WSJ logo"
                />
              </div>
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-google.png"
                  alt="Google logo"
                />
              </div>
            </div>
          </section>

          <section className="tips">
            <div className="tip">
              <span className="tip__subtitle">Acquire Customers</span>
              <h3 className="tip__title">Easily find leads and customers</h3>
              <p className="tip__description">
                Send one-off and automated email, push, and in-app messages to people. Create better
                stories.
              </p>
              <figure className="tip__decoration">
                <img
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/tip-asquire-customer.png"
                  alt="bird"
                  className="tip__image"
                />
                <figcaption className="tip__image-caption">A better way to acquire new users</figcaption>
              </figure>
            </div>
            <div className="tip">
              <span className="tip__subtitle">Engage Users</span>
              <h3 className="tip__title">Engage with your audience</h3>
              <p className="tip__description">
                Send one-off and automated email, push, and in-app messages to people. Create better
                stories.
              </p>
              <figure className="tip__decoration">
                <img
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/tip-engage-user.png"
                  alt="picture"
                  className="tip__image"
                />
                <figcaption className="tip__image-caption">
                  Knowledge base and smart self-service
                </figcaption>
              </figure>
            </div>
            <div className="tip">
              <span className="tip__subtitle">Support</span>
              <h3 className="tip__title">The best customer experiences</h3>
              <p className="tip__description">
                A beautifully simple system for tracking, prioritizing, and solving customer support
                tickets.
              </p>
              <figure className="tip__decoration">
                <img
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/tip-support.png"
                  alt="TV"
                  className="tip__image"
                />
                <figcaption className="tip__image-caption">Live chat and messaging</figcaption>
              </figure>
            </div>
          </section>

          <section className="features">
            <img
              src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/hidden-ouch.png"
              alt="Half-hidden head"
              className="features_left-decoration"
            />
            <div className="features__content">
              <div className="features__column">
                <h4 className="features__subtitle">Features</h4>
                <h2 className="features__title">Easily find leads and customers</h2>
                <p className="features__description">
                  Send one-off and automated email, push, and in-app messages to people. Create better
                  stories.
                </p>
                <div className="features__advantage-header">
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/icon-compas.png"
                    alt="Compas image"
                  />
                  <h5 className="features__advantage-title">Acquire new customers</h5>
                </div>
                <p className="features__advantage-description">
                  Everything you need to start building – including open-source code, documentation.
                </p>
                <div className="features__advantage-item">
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/icon-building.png"
                    alt="Building icon"
                  />
                  <span className="features__advantage-item-text">Engage users</span>
                </div>
                <div className="features__advantage-item">
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/icon-bucket.png"
                    alt="Bucket icon"
                  />
                  <span className="features__advantage-item-text">Develop across platforms</span>
                </div>
              </div>
            </div>
            <img
              className="features__banner"
              src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/invision-screen.png"
              alt="Invision screen"
            />
          </section>

          <section className="inbox">
            <div className="inbox__banner">
              <img
                className="inbox__banner-illustration"
                src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/wheel.png"
                alt="wheel"
              />
              <p className="inbox__banner-caption">Connect with customers and grow faster</p>
            </div>
            <div className="inbox__info">
              <h4 className="inbox__subtitle">Team Inbox</h4>
              <h2 className="inbox__title">Manage conversations</h2>
              <div className="inbox__text">
                One place to manage and respond to all conversations with leads and users. Receive
                messages from leads.
              </div>
              <div className="inbox__feedback review">
                <p className="review__text">
                  “Great widgets. Great selection. Great design and <b>easy to implement.</b> Definitely
                  a huge time saver for a web developer!”
                </p>
                <div className="review__client">
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/user-avatar.png"
                    alt="user image"
                    className="review__client-image"
                  />
                  <div className="review__client-name">
                    <p>
                      <b>Viella Malkovich</b><br />
                      Creative Director at Johnson
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="audience">
            <div className="audience-info">
              <h4 className="audience-info__subtitle">Engage Visitors</h4>
              <h2 className="audience-info__title">Understand your audience</h2>
              <p className="audience-info__description">
                Early stage company? Eligible applicants get all of our products for just $49 a month.
              </p>
              <div className="audience-info__actions">
                <button className="action-button action-button_mobile">Get Started</button>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
            <div className="cards">
              <div className="cards__user-card">
                <p className="cards__user-card-icon">
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/user-1.png"
                    alt="Developer icon"
                  />
                </p>
                <span className="cards__user-card-name">Developers</span>
              </div>
              <div className="cards__user-card">
                <div className="cards__user-card-icon">
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/user-2.png"
                    alt="TV image"
                  />
                </div>
                <span className="cards__user-card-name">Entertainment</span>
              </div>
              <div className="cards__user-card">
                <div className="cards__user-card-icon">
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/user-3.png"
                    alt="Athlet image"
                  />
                </div>
                <span className="cards__user-card-name">Athletes</span>
              </div>
              <div className="cards__user-card">
                <div className="cards__user-card-icon">
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/user-4.png"
                    alt="Creators icon"
                  />
                </div>
                <span className="cards__user-card-name">Creators</span>
              </div>
            </div>
          </section>

          <section className="customers">
            <div className="customers__row">
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-nyt.png"
                  alt="New York Times logo"
                />
              </div>
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-forbes.png"
                  alt="Forbes logo"
                />
              </div>
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-apple.png"
                  alt="Apple logo"
                />
              </div>
            </div>
            <div className="customers__row">
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-mashable.png"
                  alt="Marshable logo"
                />
              </div>
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-wsj.png"
                  alt="WSJ logo"
                />
              </div>
              <div className="customers__item">
                <img
                  className="customers__logo"
                  src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/logo-google.png"
                  alt="Google logo"
                />
              </div>
            </div>
          </section>

          <section className="feedback">
            <h3 className="feedback__title">
              Trusted by the world’s most innovative businesses – big and small
            </h3>
            <p className="feedback__description">
              “Comprehensive set of startup tools for all imaginable entrepreneurial needs. Create
              landing pages, send emails, find freelancers. Perfect for sales, marketing, and support”
            </p>
            <div className="feedback__director-name">
              <p>
                <b>Viella Malkovich</b><br />
                Creative Director at Johnson
              </p>
            </div>
            <div className="feedback__slider">
              <span className="feedback__slider-dot"></span>
              <span className="feedback__slider-dot"></span>
              <span className="feedback__slider-dot"></span>
            </div>
            <img
              src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/balloon.png"
              alt="Person with baloon"
              className="feedback__image"
            />
          </section>

          <section className="order">
            <p className="order__illustration-centered">
              <img
                src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/illustration-window.png"
                alt="Window"
                className="order__illustration"
              />
            </p>
            <div className="order__details">
              <h3 className="order__title">Start your free trial.</h3>
              <p className="order__text">
                Get notified about company updates, news and blog posts. We hate spam.
              </p>
              <form action="" className="order__form">
                <input type="email" className="order__email" placeholder="Enter your email" />
                <button className="action-button order__button">Get Started</button>
              </form>
              <p className="order__terms">
                Free 14-day trial · Easy setup · Cancel any time. Check out
                <a className="order__terms-link" href="#">Terms of Use</a>.
              </p>
            </div>
          </section>

          <footer className="footer">
            <div className="footer-navigation">
              <div className="about-company">
                <div className="logo">
                  <img
                    className="logo__image"
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/icon-dark.png"
                    alt="logo"
                  />
                  <div className="logo__text">
                    <div className="logo__name">Foundation</div>
                    <div className="logo__description">Startup landing template</div>
                  </div>
                </div>
                <div className="logo-vertical">
                  <img
                    className="logo-vertical__image"
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/icon-dark.png"
                    alt="logo"
                  />
                  <div className="logo-vertical__text">
                    <div className="logo-vertical__name">Foundation</div>
                    <div className="logo-vertical__description">Startup landing template</div>
                  </div>
                </div>
                <p className="footer__description">
                  Foundation is a website template for startups and small teams. It helps to build a
                  website in no time.
                </p>
                <div className="downloads">
                  <img
                    className="downloads__item"
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/app-store.png"
                    alt="App Store download"
                  />
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/google-play.png"
                    alt="Googla Play download"
                  />
                </div>
              </div>
              <div className="footer__line hide_desktop"></div>
              <div className="additional-navigation">
                <div className="additional-navigation__column nav-links">
                  <h3 className="nav-links__title">Products</h3>
                  <ul className="nav-links__list">
                    <li className="nav-links__list-item">Acquire Users</li>
                    <li className="nav-links__list-item">Content Marketing</li>
                    <li className="nav-links__list-item">Website Templates</li>
                    <li className="nav-links__list-item">Customer Management</li>
                    <li className="nav-links__list-item">Virtual Inbox</li>
                  </ul>
                </div>
                <div className="nav-links additional-navigation__column">
                  <h3 className="nav-links__title">Company</h3>
                  <ul className="nav-links__list">
                    <li className="nav-links__list-item">About Foundation</li>
                    <li className="nav-links__list-item">Brand Guidelines</li>
                    <li className="nav-links__list-item">Press Kit</li>
                    <li className="nav-links__list-item">Support</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer__line hide_mobile"></div>
            <div className="footer-links">
              <nav className="terms">
                <a href="#" className="terms__item">Terms</a>
                <a href="#" className="terms__item">Privacy</a>
                <a href="#" className="terms__item">License</a>
              </nav>
              <div className="social-links">
                <a
                  className="social-links__item"
                  href="https://twitter.com">
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/social-twitter.png"
                    alt="Twiter link"
                  />
                </a>
                <a
                  className="social-links__item"
                  href="https://facebook.com">
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/social-fb.png"
                    alt="Facebook link"
                  />
                </a>
                <a
                  className="social-links__item"
                  href="https://linkedin.com">
                  <img
                    src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson24/hw1/social-linkedIn.png"
                    alt="linkedIn link"
                  />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </div>
  );
}

export default App;
