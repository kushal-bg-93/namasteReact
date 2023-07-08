import User from "./User";
import Userclass from "./Userclass";
import React from "react"
import {BsGithub,BsLinkedin} from "react-icons/bs"


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
            <div className="flex justify-center items-center bg-gray-200 min-h-screen">
                <div className="bg-gradient-to-t from-gray-700 to-gray-500 flex items-center flex-col rounded-lg hover:shadow-2xl duration-150  shadow-lg h-[770] w-[700]">
                    <img className="rounded-full h-44 w-44 mt-7 shadow-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vbIpc8sUWMUOT1Y6XVrG-8ye5Q_6O0aPdDTivJ6S3qhO1ANTAZgIl-6nLxC1uHGkwFw&usqp=CAU" alt="" />

                    <hr className="border mt-8 w-[100%] border-solid border-gray-200"/>

                    <h1 className="font-extrabold text-gray-950 text-4xl mt-4">KUSHAL B G</h1>
                    <div className="info flex items-center">
                        
                        <p className="text-gray-950">MERN STACK DEVELOPER | 1.8 YRS | Waycool Foods</p>
                        <div className="flex gap-3 icons ml-4">
                            {/* <a href="https://github.com/kushal-bg-93/namasteReact" target="_blank"><BsGithub className="font-bold hover:scale-110 hover:font-extrabold duration-150 text-3xl"/></a> */}
                            <a href="https://in.linkedin.com/in/kushal-b-g-401806233" target="_blank"><BsLinkedin className="font-bold hover:scale-110 hover:font-extrabold duration-150 text-3xl"/></a>
                            
                        </div>
                        
                    </div>

                    <div className="contact-info border shadow-lg hover:scale-105 hover:shadow-xl hover:border-2 duration-150  border-solid border-gray-900 rounded-lg  w-[90%] mt-3 flex p-5">
                        <ul className="ml-3 list-disc">
                            <li><h2 className="font-bold">Balance Confirmation (Nodejs) : </h2> <p>Worked on module to keep track of ledger details of customer transactions. Handled more than 80 million transactions of the customers.</p></li>

                            <li className="mt-2"><h2 className="font-bold">NPS (Nodejs) : </h2> <p>Implemented ratings and feedback system for the orders placed by the customers.</p></li>

                            <li className="mt-2"><h2 className="font-bold">SO OTP (Nodejs) : </h2> <p>Implemented otp based confirmation while placing the orders by the customers.</p></li>

                            <li className="mt-2"><h2 className="font-bold">VAPT (Nodejs) : </h2> <p>Worked on implementing various security related concerns to prevent attack on the portal.</p></li>

                            <li className="mt-2"><h2 className="font-bold">Admin Portal (Nodejs) : </h2> <p>Worked on admin portal developed for various apps in the organization.</p></li>

                        </ul>
                    </div>


                </div>

            </div>
        )
    }
}

export default About;