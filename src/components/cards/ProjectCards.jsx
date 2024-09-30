const ProjectCards = ({ project }) => {

    return (

        <div className="project-container">

        <img src={project.project_images} alt="Image of project" className="image"/>
        <h2>{project.name}</h2>
        <p>{project.brief_description}</p>

        </div>
        
    )

}

export default ProjectCards;