import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Well-qualified Full Stack Developer familiar with wide range of
            programming utilities and languages. Knowledgeable of backend and
            frontend development requirements. Handles any part of process with
            ease. Collaborative team player with excellent technical abilities
            offering 5 years of related experience.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack Web Developer</h3>
              <div className="subheading mb-3">
                Didital Mind Development, Krasnoyarsk
              </div>
              <p>Took part in the following projects:</p>
              <ul>
                <li>
                  Big payments system for one of the biggest car manufacturers
                  in Europe
                </li>
                <li>Service for the sale and rental of real estate </li>
                <li>
                  Internal project management tool integrated with Microsoft TFS
                </li>
                <li>Channel Manager for hotels</li>
              </ul>
              <p>
                Designed and developed efficient and maintainable software
                according to business objectives and needs of various clients.
              </p>
              <p>
                Maintained complex technology infrastructure and collaborated
                with product team to implement new features and strategically
                plan for future products.
              </p>
              <p>
                Reviewed individual department performance and worked with
                leadership to improve processes, procedures and practices.
              </p>
              <p>
                Compiled IT training and assessment resources based on
                understanding of technical processes and skills-development
                needs.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2018 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack Web Developer</h3>
              <div className="subheading mb-3">Glavniy Zaim, Krasnoyarsk.</div>
              <p>
                Developed, coded and updated internal system for tracking
                workers, clients, documents (like a little CRM)
              </p>
              <p>
                Built user interface, data visualizations and designed overall
                user experience
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2017 - December 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Full Stack Web Developer</h3>
              <div className="subheading mb-3">Arview, Tomsk.</div>
              <p>Start the way as a Full Stack Asp Net developer</p>
              <p>Developed, coded and updated automobile portal site</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2016 - July 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Siberian federal university</h3>
              <div className="subheading mb-3">
                Master of programming engineering
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2017 - June 2019</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">
                Tomsk state university of control systems and radioelectronics
              </h3>
              <div className="subheading mb-3">
                Bachelor of programming engineering
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2013 - June 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-windows"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-database"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              .NET Core development
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              JS Full Stack development (Node, Express, React)
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              SQL and NoSQL databases (MicrosoftSQL, Postgress, MongoDB)
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Mentoring students and trainees
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Have a lot of hobbies. Like to making a videos, playing basketball.
            Interested in motorbikes (unfortunately have no one, but in plan),
            Gym, Hiking and Traveling
          </p>
          <p className="mb-0">
            Interested in sci-fi and fantasy genre movies and books. Also like videogames.
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
