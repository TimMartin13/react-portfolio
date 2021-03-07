import React from "react";
import "./style.css";

function Contact() {
  return (
    <div class="col-sm-12 col-md-4">
        {/* Card Header */}
        <div class="col-sm-12">
            {/* Title */}
            <section class="row">
                <div class="col-md-12 info">
                    {/* Information */}
                    <div class="card bkgd-color">
                        <div class="card-body text-color">
                            <h4 class="card-title text-color">Tim Martin</h4>
                            <h6 class="card-subtitle mb-2 text-muted">Full Stack Developer</h6>
                            <div class="contact-info">
                                <p class="card-p">&nbsp;<i class="fas fa-mobile-alt"></i>&nbsp;&nbsp;&nbsp;: 612.799.1450</p>
                                <p class="card-p"><i class="far fa-envelope"></i>&nbsp;&nbsp;: timmartin13@gmail.com</p>
                                <p class="card-p"><i class="fab fa-github"></i>&nbsp;&nbsp;: <a class="card-a" href="https://github.com/TimMartin13" target="_blank">github.com/TimMartin13</a></p>
                                <p class="card-p"><i class="fab fa-linkedin-in"></i>&nbsp;&nbsp;: <a class="card-a" href="https://www.linkedin.com/in/tim-martin13/" target="_blank">linkedin.com/in/tim-martin13/</a></p>
                                <p class="card-p">Resume: <a class="card-a" href="./assets/images/TimMartinResume.pdf" target="_blank">&emsp;.pdf</a><a class="card-a" href="./assets/images/TimMartinResume.docx" target="_blank">&emsp;&emsp;.docx</a></p>
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
