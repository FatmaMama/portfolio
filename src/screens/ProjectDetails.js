import React from 'react';
import data from '../data/data.json';


export default function ProjectDetails({match}) {

    const currentProject = data.projects.filter(project => project.id === match.params.id);
    const project = currentProject[0]
    
    
    return (
        <main>
            <div className="container d-flex flex-column align-items-center pt-5">
                <div className="container__title">{project.name}</div>

                <div className="container__subtitle pb-4">{project.subName}</div>

                <video width="100%" height="auto" poster={`images/${project.image}`} controls>
                    <source src={`demos/${project.video}`} type="video/mp4" />
                </video>


                <div className="container__text py-5">
                    <ul>
                        <li className="py-3">
                            <span className="container__bold">Description : </span>
                            <div dangerouslySetInnerHTML={{ __html: project.description }} />
                        </li>

                        {project.tasks !== '' &&  (
                            <li>
                                <span className="container__bold">Tasks : </span>
                                {project.tasks}
                            </li>
                        )}
                   
                        <li className="py-3">
                            <span className="container__bold">Technologies : </span>
                            <div className="row">
                                {project.technologies.map(technology => (
                                    <div key={technology.id} className="col-lg-1 col-md-2 col-sm-4 col-6">
                                        <img  className="tech" alt={technology.name} src={`images/${technology.image}`}/>
                                    </div>
                                ))}
                            
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
      </main>
    )
}
