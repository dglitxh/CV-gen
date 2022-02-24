import { Component } from "react";
import uniqid from "uniqid"

class Education extends Component{
    constructor(props){
        super(props);
        this.InitialState = {
                school: '',
                program: '',
                startDate: '',
                endDate: '',
                id: ''
            }

        this.state = this.InitialState
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
        let edu = this.state
        edu['id'] = uniqid()
        this.props.saveEdu(edu)
        console.log(this.state)
        this.setState(this.InitialState)
    }

    render(){
        return(
            <div className="form-component">
                <h1 className="text-3xl my-5 text-sky-600 heading leading-7" >Education</h1>
            <form onSubmit={this.handleSubmit} className="w-full mt-3">
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                School Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700
            border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="School"
                    onChange={this.handleChange}
                    name='school'
                    required
                    defaultValue = {this.props.selected? this.props.selected.school : ''}
                    value={this.state.school}/>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Program of study
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
            border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
            focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Program"
                    onChange={this.handleChange}
                    name='program'
                    required
                    defaultValue = {this.props.selected? this.props.selected.program : ''}
                    value={this.state.program}/>
            </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Start Date
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700
            border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="date"
                    placeholder="Start Date"
                    onChange={this.handleChange}
                    name='startDate'
                    required
                    defaultValue = {this.props.selected? this.props.selected.startDate : ''}
                    value={this.state.startDate}/>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                End Date
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
            border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
            focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="date"
                    placeholder="End date"
                    onChange={this.handleChange}
                    name='endDate'
                    defaultValue = {this.props.selected? this.props.selected.endDate : ''}
                    value={this.state.endDate}/>
            </div>
        </div>
        <button type="submit" className="inline-flex justify-center my-1 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add
            </button>
        </form>
        <br></br>
    </div>
        )
    }
}

export default Education
