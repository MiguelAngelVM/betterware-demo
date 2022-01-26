import React,{Component,createContext} from "react"
import SInfo from 'react-native-sensitive-info'
import { optionsSINFO } from "./utils/Utils";

export const Appcontext = createContext();

export default class AppProvider extends Component{
    state={
       cart:{}
    }

    constructor (props){
        super(props);
    }
   
    setChanges = (state) => {
        this.setState(state)
    }

    render(){
        let {setChanges}=this
        return(
            <Appcontext.Provider value={{...this.state, setChanges}}>
                {this.props.children}
            </Appcontext.Provider> 
        )
    }
}