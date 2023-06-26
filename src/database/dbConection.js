import { connect } from 'mongoose'
import { MONGODB_URI } from '../config'

//opcion 1
// (async() => { 
//     try{
//         const db = await connect(MONGODB_URI)
//         console.log(`DB conectada en:${db.connection.name}`)
//     }catch(e){
//         console.log(e)
//     }
// })()

//OPCION 2
connect(MONGODB_URI)
    .then(resp=>console.log(`DB conectada en:${resp.connection.name}`))
    .catch(error => console.log(error))