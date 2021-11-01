import React from 'react'

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container py-5">
                <form  action="https://formsubmit.co/fatma_mama@hotmail.fr" method="POST">
                    <div className="row mb-3">
                        <div className="col-lg-8 text-center m-auto">
                            <h1>
                                <span className="dash p-4">----</span>
                                <strong>Contact me</strong>
                                <span className="dash p-4">----</span>
                            </h1>
                        </div>
                    </div>

                    <div className="row py-5">
                        <div className="col-lg-4 col-md-4 m-auto">
                            <div className="row d-flex justify-content-center align-items-center">
                                <div className=" logo col-lg-1 col-md-1 col-sm-1  col-1 mx-2 d-flex align-items-center justify-content-center text-center">
                                    <i className="fas fa-phone fa-2x"></i>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-8 d-flex flex-column justify-content-center ">
                                    <div><strong>Phone</strong></div>
                                    <p>+216 93 492 127</p>
                                </div>
                            </div>

                            <div className="row py-2 d-flex justify-content-center align-items-center">
                                <div className="logo col-lg-1 col-md-1 col-sm-1 col-1 mx-2 d-flex align-items-center justify-content-center text-center">
                                    <i className="far fa-envelope fa-2x"></i>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-8 col-8 d-flex flex-column justify-content-center">
                                    <div><strong>Email</strong></div>
                                    <p>fatma_mama@hotmail.fr</p>
                                </div>
                            </div>

                            <div className="row py-2 d-flex justify-content-center align-items-center">
                                <div className="col-lg-3 col-md-4 col-sm-4 col-1 d-flex align-items-center justify-content-center text-center">
                                    <a  className="logo" href="https://www.linkedin.com/in/fatma-mama-9397b5129/"><i className="fab fa-linkedin fa-2x"></i></a>
                                    <a className="logo" href="https://github.com/FatmaMama"><i className="fab fa-github fa-2x ms-2"></i></a>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-7 col-7 d-flex flex-column justify-content-center">
                                    <div><strong>Social</strong></div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-7 col-md-7">
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" className="form-control bg-light" placeholder="Your Name" name="name" required/>
                                </div>

                                <div className="col-lg-6">
                                    <input type="text" className="form-control bg-light" placeholder="Your Email" name="email" required/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col py-3">
                                    <textarea name="message" className="form-control bg-light" placeholder="Enter Message"  cols="10" rows="5" required></textarea>
                                </div>
                            </div>

                        </div>

                        <input type="hidden" name="_next" value="https://fatmamama.github.io/projects/thankyou.html"/>
                        <input type="hidden" name="_captcha" value="false"/>

                        <div className="row">
                            <div className="col-lg-5 m-auto text-center mt-3">
                                <button className="btn btn-pink" type="submit">Send message</button>
                            </div>
                        </div>
                    
                    </div>
                </form>
            </div>
        </section>
    )
}
