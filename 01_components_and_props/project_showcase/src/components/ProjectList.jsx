import ProjectItem from "./ProjectItem"

export default function ProjectList({projects}) { //object destructuring

    // console.log(props) //{}
    // console.log(props.projects) //[] 
    //                             //access the value of the props by dot notation
    // console.log(props.num)

    // // let projects = props.projects //object destructuring
    // // console.log("======", projects) //[] value

    // let { projects } = props //object destructuring
    // console.log("#######", projects)  //[] value
    
    //////////////////////////
    //.map vs .forEach
    //////////////////////////

    /////////.map one line/////////////////
    // let projectMap = projects.map((eachP) => eachP.name) //one line .map method, doesn't require a return keyword
    // console.log(projectMap) //[]

    /////////.map multiline/////////////////
    // console.log(projects)
    const projectMapMultiLine = projects.map((eachP) => {
        return <ProjectItem project={eachP} key={eachP.id}/>
    })
    console.log(projectMapMultiLine) //[]

    /////////.forEach one line/////////////////
    // let projectForEach = projects.forEach((eachP) => eachP)
    // console.log(projectForEach) //undefined

    /////////.forEach multiline/////////////////    
    // let projectForEachMultiline = projects.forEach((eachP) => {
    //     return eachP
    // })
    // console.log(projectForEachMultiline) //undefined

   return (
    <>
        {projectMapMultiLine}
    </>
  )
}
