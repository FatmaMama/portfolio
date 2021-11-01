import React, { Fragment } from 'react';
import data from '../data/data.json'
import About from '../components/About';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <Fragment>
            <section className="home pt-5" id="home">
               <div className="container pt-5" >
                    <div className="row p-5">

                        <div className="col-md-8 pt-5 pt-md-1">
                            <h3 className="text-light pt-5">Hello, my name is</h3>
                            <h1 className="text-light fw-bold my-name" >Fatma Mama</h1>
                            <h3 className="text-light">And I am a {' '} 
                                <span className="pink">Junior full-stack JS Developer</span>
                            </h3>
                        </div>

                        <div className="col-md-4 pt-lg-0 pt-md-4">
                            <img  className="img-fluid" src="images//illustration.png" alt="logo" />
                        </div>
                    </div>
                </div>
            </section>

            <About id="about"/>
            <Projects id="projects" />
            <Technologies id="technologies" technologies={data.technologies}/>
            <Contact id="contact" />
           
        </Fragment>
    )
}
