import '../../CSS/home.css'

const SkillsCard = () => {

    return (

    <div className="content-wrap">

         <h2>Technical Skills</h2>

        <section className="bio">

        <ul>
        <h3>Languages</h3>
        <li>JavaScript, using Node.js and browsers as environment. </li>
        <h3>Testing</h3>
        <li>Test Driven Development (TDD), Jest, Supertest, Husky.</li>
        <h3>Back-end</h3>
        <li>SQL, PSQL, seeding, migrations, MongoDb.</li>
        <h3>Front-end</h3>
        <li>React.js, React native, HTML, CSS, Lighthouse and other accessibility tools. Hosting: Supabase, Render.</li>
        <h3>Soft Skills</h3>
        <li>Paired programming, technical communication, wire-framing, agile and SCRUM methodologies.</li>
        </ul>

        </section>
        

    </div>

    )


}

export default SkillsCard;
