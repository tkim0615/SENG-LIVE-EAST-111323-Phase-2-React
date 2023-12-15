//Project Item component
//purpose of the component is to render each project data

export default function ProjectItem( {project}) { //obj destructuring
    console.log(project)

    const { id, about, name, image, link, phase } = project
    console.log(about)
    //const {keyname, keyname, keyname, keyname} = objectname
    // console.log(about) //value 
    return (
    <div>
      {/* <img src={image}></img>
      <h3>{name}</h3>
      <p>{link}</p> */}
    </div>
  )
}
