import React from "react"

class Userclass extends React.Component{

    constructor(props){
        super(props)

        // this.state={
        //     count:0
        // }
        // console.log(this.props.name+'Child constructor called')

        this.interval=setInterval(()=>{console.log("interval")},1000)
    }
    
    componentDidMount(){
        console.log(this.props.name+'Child componentDidMount called')
    }


    // componentDidUpdate(){
    //     console.log(this.props.name+"Child component Did updatate called")
    // }

    // inside functional component the return function inside use effect will be used to perform cleanup operation
    componentWillUnmount(){
        clearInterval(this.interval)
    }



    render(){

        // console.log(this.props.name+'Child render called')

        const {name,location}=this.props;
        // let {count}=this.state;
        return (
            <div className="user-info">
            <h1>Name: {name}</h1>
            <h3>Location (class) : {location}</h3>
            <h3>Email (class) : kushaltmx@gmail.com</h3>
            {/* <h2>Count : {count}</h2> */}
            {/* <button onClick={()=>this.setState({count:count+1})}>Increment</button> */}
        </div>
        )
    }
}

export default Userclass;