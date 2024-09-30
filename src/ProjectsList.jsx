import ProjectCards from "./ProjectCards";
import projects from './data/projects'


const ProjectLists = () => {

    return (

        <div className="project-list">

            {projects.map((project, id) => {

                return <ProjectCards key={id} project={project} />

            })}

        </div>
    )

}

export default ProjectLists;