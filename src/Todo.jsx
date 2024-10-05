// export default function Todo({task, isDone}){
    
//     return(
//         <li>Task: {task}</li>
//     )
// }

//conditional rendering -01-
// export default function Todo({task, isDone}){
//     if(isDone === true)    {
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }
//conditional rendering -02-
// export default function Todo({task, isDone}){
//     if(isDone)    {
//         return <li>Finished work: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

// conditional rendering -03-
// export default function Todo({task, isDone}){
//     return(
//         <li>{isDone ? 'Finished' : 'Work On'} : {task}</li>
//     )
// }


// conditional rendering -04- &&
// export default function Todo({task, isDone}){
    
//     return(
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }

// conditional rendering -05- ||
// export default function Todo({task, isDone}){
    
//     return(
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }

//conditional rendering -06-
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}

