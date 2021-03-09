import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="col-sm-12 col-md-4">
        {/* Card Header */}
        <div className="col-sm-12">
            {/* Title */}
            <section className="row">
                <div className="col-md-12 info">
                    {/* Information */}
                    <div className="card card-background">
                        <div className="card-body text-color">
                            <h4 className="card-title text-color">Tim Martin</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Full Stack Developer</h6>
                            <div className="contact-info">
                                <p className="card-p">&nbsp;<i className="fas fa-mobile-alt"></i>&nbsp;&nbsp;&nbsp;: 612.799.1450</p>
                                <p className="card-p"><i className="far fa-envelope"></i>&nbsp;&nbsp;: timmartin13@gmail.com</p>
                                <p className="card-p"><i className="fab fa-github"></i>&nbsp;&nbsp;: <a className="card-a" href="https://github.com/TimMartin13" target="_blank" rel="noreferrer">github.com/TimMartin13</a></p>
                                <p className="card-p"><i className="fab fa-linkedin-in"></i>&nbsp;&nbsp;: <a className="card-a" href="https://www.linkedin.com/in/tim-martin13/" target="_blank" rel="noreferrer">linkedin.com/in/tim-martin13/</a></p>
                                <p className="card-p">Resume: <a className="card-a" href="./assets/images/TimMartinResume.pdf" target="_blank">&emsp;.pdf</a><a className="card-a" href="./assets/images/TimMartinResume.docx" target="_blank">&emsp;&emsp;.docx</a></p>
                            </div>
                        </div>
                      </div>
                </div> 
            </section>
        </div>  
    </div>
  )
}

export default Contact;
