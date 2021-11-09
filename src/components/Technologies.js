import React from 'react';


export default function Technologies({technologies}) {
    return (
        <section className="technologies" id="technologies">
            <div className="container py-5">
                <div className="row mb-4">
                <div className="col-lg-6 text-center m-auto">
                    <h1 className="text-light section-title" >
                        <span className="dash p-4">---</span>
                        <strong>Technologies</strong>
                        <span className="dash p-4">---</span>
                    </h1>
                </div>
                </div>

                <div className="container m-auto pt-3">
                    <div className="row">
                        {technologies.map(technology => (
                            <div key={technology.id} className="tech__container col-lg-1 col-md-2 col-sm-2 col-2 mb-5" data-tooltip={technology.name}>
                                <img  className="tech" alt={technology.name} src={`./images/${technology.image}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
