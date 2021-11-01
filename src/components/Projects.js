import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.json'

export default function Projects() {

    return (
        <section className="projects" id="projects">
            <div className="container py-5">
                <div className="row mb-5">
                <div className="col-lg-5 text-center m-auto">
                    <h1 className="text-light">
                        <span className="dash p-4">----</span>
                        <strong>My Projects</strong>
                        <span className="dash p-4">----</span>
                    </h1>
                </div>
                </div>

                <div className="row">
                    {data.projects.map(project => (
                        <div key={project.id} className="col-lg-4 col-md-6 text-center">
                            <div className="card border-0 mb-4">
                                <img className="card-image" src={`images/${project.image}`}/>
                                <div className="card-body">
                                        <h6 className="card-title text-light">{project.name}</h6>
                                        <Link to={`/project/${project.id}`}><button type="button" className="btn btn-outline">Discover</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
