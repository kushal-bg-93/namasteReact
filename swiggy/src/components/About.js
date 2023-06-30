import User from "./User";
import Userclass from "./Userclass";
import React from "react"


class About extends React.Component{


    constructor(){
        super();
        // console.log('Parent constructor called')
        this.state={
            userInfo:{
            }
        }
    }


    async componentDidMount(){
        // console.log('Parent componentDidMount called')
        let data=await fetch("https://api.github.com/users/kushal-bg-93")
        data =await data.json()
        this.setState({
            userInfo:data
        })

        console.log("this is data>>>>",data)
        console.log("This is userInfo>>>>",this.state.userInfo)
    }

    // componentDidUpdate(){
    //     console.log("Parent componentDidUpdate called")
    // }

    // componentWillUnmount(){
    //     console.log("Parent componentWillUnmount called")
    // }

    render(){

        console.log('Parent render called')
        return (
            <div className>
                <h1>This is About Us page</h1>
                <div className="about">
                    {console.log('This is userInfo',this.state.userInfo)}
                <Userclass name={this.state.userInfo.login} location={this.state.userInfo.repos_url}/>
                {/* <Userclass name="Second" location="India (Class)"/> */}
                </div>
            </div>
        )
    }
}

export default About;