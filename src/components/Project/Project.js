import './Project.css'

export default function Project(){
    return(
        <div className="project">
<div className='project-h1'>
    <h1> My Projects</h1>
</div>
<div className='project-detail'>
    <div className='ecommers-div'><h1>E-Commers</h1>
    <h2>Develop whole project using React.js and Node.js</h2>
    <h2>Design the full shopping web app with the help of reusable components.</h2>
    </div>
    <div className='quickcv-div'><h1 >Quick CV</h1>
    <h2>User can create resume with the help of formatted template and can
    print as well.</h2>
    <h2>Developed login authentication using firebase authentication</h2>
    </div>
    <div className='imdb-div'><h1>IMDB Clone</h1>
    <h2>Created protected routes for some components using react-redux</h2>
    <h2>Created reusable components with help of Material-Ui</h2>
    </div>
    <div className='imgur-div'><h1>Imgur Frontend</h1>
    <h2>Developed routes using react-router-dom</h2>
    <h2>Responsible for fetch data with help of fetching external API using Axios</h2>
    
    </div>
</div>
        </div>
    )
}