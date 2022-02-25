import { Component, useState } from "react";
import uniqid from "uniqid"

export class Education extends Component{
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
        edu.id = uniqid()
        this.setState(edu)
        this.props.saveEdu(this.state)
        console.log(this.state, 'edu form values')
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
                    value={this.state.school}
                    />
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
                    value={this.state.program}
                    />
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
                    value={this.state.startDate}
                    />
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
                    value={this.state.endDate}
                    />
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

export const EditEdu = (props) => {
    const InitialState = props.selected  
    const [school, setSchool] = useState(InitialState.school)
    const [program, setProgram] = useState(InitialState.program)
    const [startDate, setStartDate] = useState(InitialState.startDate)
    const [endDate, setEndDate] = useState(InitialState.endDate)

    const handleChange = (e) => {
        const tag = e.target.name
        const val = e.target.value
       switch(tag){
           case 'school':
               setSchool(val)
               break
            case 'program':
                setProgram(val)
                break
            case 'startDate':
                setStartDate(val)
                break
            case 'endDate':
                setEndDate(val)
                break
            default:
                console.log('edit form value not found')
       }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const edit = {
            'school': school,
            'program': program,
            'startDate': startDate,
            'endDate': endDate
        }
        setTimeout(() => {
            console.log(edit, 'edit in edu')
            props.editEduEntry(edit)
        }, 0);
        
        
        
    }

    return(
        
        <div className="form-component">
        <h1 className="text-3xl my-5 text-sky-600 heading leading-7" >Education</h1>
    <form  onSubmit={(e) => handleSubmit(e)} className="w-full mt-3">
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
            name='school'
            onChange={handleChange}
            required
            value = {school}
            />
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
            name='program'
            onChange={handleChange}
            required
            value = {program}
            />
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
            name='startDate'
            onChange={handleChange}
            required
            value = {startDate}
            />
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
            name='endDate'
            onChange={handleChange}
            value = {endDate}
            />
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

