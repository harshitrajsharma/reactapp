import React from 'react'

export default function Contact() {
    return (
      <div className="contact-outer-div bg-black text-white">
        <div className="contact-container ">
          <div className="contact-box1">
                    <img
              src="https://www.aaonlinebook.com/images/online%20book%20logo-02%20(1).png"
                        alt=""
              width={"300px"}
            />
            <p className='text-center'>
              --Underage gambling is an offence-- 
            </p>
          </div>
          <div className="contact-box2">
            <h1 className="front-banner-content-heading">
              Get In Touch With AA Online Book Customer Care
            </h1>
            <p className="contact-content">
              For Any Queries, Emergencies, Feedbacks or Complaints. We Are Here
              To Help You 24/7 With Our Online Services.
            </p>
            <hr />
            <p className="contact-content">Whatsapp us on</p>
            <button className="btn btn-warning">+9183924928374</button>{" "}
            &nbsp;&nbsp;
            <button className="btn btn-warning">+9173927383472</button>
            <p className="contact-content">
              With Our Step-By-Step Guide For Beginners
            </p>
            <button className="btn btn-warning">+913729734923</button>
          </div>
        </div>
      </div>
    );
}
