import React, { Fragment } from 'react';
import data from '../data/data.json'
import About from '../components/About';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';
import Typical from 'react-typical';


export default function Home() {

    return (
        <Fragment>
            <section className="home pt-md-5 pt-1" id="home">
               <div className="container pt-5" >
                    <div className="row p-5">

                        <div className="col-md-8  pt-md-1">
                            <h3 className="text-light pt-5">Hello, my name is</h3>
                            <h1 className="text-light fw-bold my-name" >Fatma Mama</h1>
                            <h3 className="text-light">And I am a {' '} 
                                {/* <span className="pink">Junior full-stack JS Developer</span> */}
                                <Typical
                                    className="pink"
                                    steps={[
                                            'Junior full-stack JS Developer',
                                        1000,
                                        '',
                                        500,
                                        'Junior full-stack JS Developer',
                                        1000,
                                        '',
                                        500,
                                        'Junior full-stack JS Developer',
                                        1000
                                        ]}
                                        wrapper="span"
                                        loop={Infinity}
                                />
                            </h3>
                        </div>

                        <div className="col-md-4 pt-lg-0 pt-md-4">
                            <img  className="img-fluid" src="images/illustration.png" alt="logo" />
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
