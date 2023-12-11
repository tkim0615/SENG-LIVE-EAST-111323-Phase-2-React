//Project Item component
//purpose of the component is to render each project data

export default function ProjectItem( {project, key}) { //obj destructuring
    console.log(project)

    const { id, about, image, link, phase } = project
    //const {keyname, keyname, keyname, keyname} = objectname
    console.log(about) //value 
    return (
    <div>ProjectItem hello world</div>
  )
}
