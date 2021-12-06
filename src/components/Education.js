import { Component } from "react";
import uniqid from "uniqid"

class Education extends Component{
    constructor(props){
        super(props);
        this.state = {
                school: '',
                program: '',
                startDate: '',
                endDate: '',
                id: uniqid()
            }
    }
    
 education_list = []

    handleChange = (e) => {
        const tag = e.target.name
        const value = e.target.value
        this.setState({
                [tag]: value, 
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveEdu(this.state)
        console.log(this.state)   
    }

    render(){
        return(
            <div>
                <h1 class="text-3xl font-bold leading-7 text-center ">Education</h1>
            <form onSubmit={this.handleSubmit} class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                School Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 
            border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" 
                    type="text" 
                    placeholder="School"
                    onChange={this.handleChange}
                    name='School'
                    value={this.state.school}/>
            </div>
            <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Program of study
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border 
            border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
            focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" 
                    type="text" 
                    placeholder="Program"
                    onChange={this.handleChange}
                    name='program'
                    value={this.state.program}/>
            </div>
        </div>
        
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Start Date
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 
            border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" 
                    type="date" 
                    placeholder="Start Date"
                    onChange={this.handleChange}
                    name='startDate'
                    value={this.state.startDate}/>
            </div>
            <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                End Date
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border 
            border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none 
            focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" 
                    type="date" 
                    placeholder="End date"
                    onChange={this.handleChange}
                    name='endDate'
                    value={this.state.endDate}/>
            </div>
        </div>
        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
        </form>
        <br></br>
    </div>
        )
    }
}

export default Education