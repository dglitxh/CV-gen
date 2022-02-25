import { Component } from "react";
import uniqid from "uniqid"

class About extends Component{
    constructor(props){
        super(props);
        this.state = {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                id: uniqid()
            }
    }

    handleChange = (e) => {
        const tag = e.target.name
        const value = e.target.value
        this.setState({
                [tag]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveAbout(this.state)
        console.log(this.state, 'about form values')
    }

    render(){
        return(
            <div className="form-component">
                <h1 className="text-3xl my-5 text-sky-600 heading leading-7" >Personal Info</h1>
                <form onSubmit={this.handleSubmit} className="w-full">
                    <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700
                    border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="First Name"
                            onChange={this.handleChange}
                            name='firstName'
                            required
                            value={this.state.firstName}/>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Last Name
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
                    border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
                    focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Last Name"
                            onChange={this.handleChange}
                            name='lastName'
                            required
                            value={this.state.lastName}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Address
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200
                    rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-address"
                            type="text"
                            placeholder="Address"
                            onChange={this.handleChange}
                            name='address'
                            required
                            value={this.state.address}/>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                       Phone
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
                    py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-startdate"
                            type="phone"
                            placeholder="Phone"
                            onChange={this.handleChange}
                            name='phone'
                            required
                            value={this.state.phone}/>
                    </div>


                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                        Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded
                    py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-enddate"
                            type="text"
                            placeholder="example@gmail.com"
                            onChange={this.handleChange}
                            name='email'
                            required
                            value={this.state.email}/>
                    </div>
                </div>
                <button type="submit" className="inline-flex justify-center mt-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
                </form>
                <br></br>

            </div>


        )
    }
}

export default About
