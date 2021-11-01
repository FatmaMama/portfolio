import React from 'react'

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container py-5">
                <div className="row mb-3">
                <div className="col-lg-6 text-center m-auto">
                
                    <h1>
                        <span className="dash p-4">----</span>
                        <strong>About me</strong>
                        <span className="dash p-4">----</span>
                    </h1>
                    
                </div>
                </div>

                <div className="row">
                    <div className="col-lg-5 d-flex justify-content-center align-items-center">
                        <img id="me" alt="me" src="images/Mee-bg.png" height="350" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center mt-lg-4">
                        <h3>I'm Fatma and I'm a {' '}<span className="pink">Developer</span> .</h3>
                        <p>I am basically a civil engineer, but I have decided to change my career to web development and try a new experience.</p>
                        <p>
                            I've took an intensive training in RBK (Rebootkamp) Tunisia, a place that make you challenge yourself, manage your stress and experience being out of your confort zone.
                            Through this journey, I learned coding in javascript and many technologies. And I am highly motivated and willing to learn more and improve my level.
                        </p>
                        <p>
                            When I am not coding, you find me practicing one of my hobbies, either doing some sport or playing piano or sewing and embroidring some clothes.
                            Web development is my new passion through which I hope to build a successful career and I will, because <strong>"there are no secrets to success. It is the result of preparation, hard work and learning from failure."</strong>
                        </p>   
                    </div>
                </div>
            </div>
        </section>
    )
}
