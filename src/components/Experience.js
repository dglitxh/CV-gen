import { Component, useState } from "react";
import uniqid from 'uniqid'

export class Experience extends Component{
    constructor(props){
        super(props);
        this.InitialState = {
                workplace: '',
                position: '',
                startDate: '',
                endDate: '',
                tasks: '',
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
        let exp = this.state
        exp['id'] = uniqid()
        this.props.saveExp(exp)
        console.log(this.state, 'exp form values')
        this.setState(this.InitialState)
    }

    render(){
        return(
            <div className="form-component">
                <h1 className="text-3xl my-5 text-sky-600 heading leading-7" >Experience</h1>
            <form onSubmit={this.handleSubmit} className="w-full ">
            <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Work Place
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700
            border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="workplace"
                    onChange={this.handleChange}
                    name='workplace'
                    required
                    value={this.state.workplace}/>
            </div>
            <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                position
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
            border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
            focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="position"
                    onChange={this.handleChange}
                    name='position'
                    required
                    value={this.state.position}/>
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
                    value={this.state.startDate}/>
            </div>
            <div className="w-full md:w-1/2 px-3">
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
                    value={this.state.endDate}/>
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
           Tasks
        </label>
        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700
        border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-task-name"
                type="date"
                placeholder="tasks"
                onChange={this.handleChange}
                name='tasks'
                required
                value={this.state.tasks}>
            </textarea>
        </div>
        </div>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Add
            </button>
        </form>

        <br></br>
        <br></br>
    </div>
        )
    }
}

export const EditExp = (props) => {

    const InitialState = props.selected  
    const [workplace, setWorkplace] = useState(InitialState.workplace)
    const [position, setPosition] = useState(InitialState.position)
    const [startDate, setStartDate] = useState(InitialState.startDate)
    const [endDate, setEndDate] = useState(InitialState.endDate)
    const [tasks, setTasks] = useState(InitialState.tasks)

    const handleChange = (e) => {
        const tag = e.target.name
        const val = e.target.value
       switch(tag){
           case 'workplace':
               setWorkplace(val)
               break
            case 'position':
                setPosition(val)
                break
            case 'startDate':
                setStartDate(val)
                break
            case 'endDate':
                setEndDate(val)
                break
            case 'tasks':
                setTasks(val)
                break
            default:
                console.log('edit form value not found')
       }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const edit = {
            'workplace': workplace,
            'position': position,
            'startDate': startDate,
            'endDate': endDate,
            'tasks': tasks
        }
        setTimeout(() => {
            console.log(edit, 'edit in exp')
            props.editExpEntry(edit)
        }, 0);
        
        
        
    }

    return(
        <div className="form-component">
        <h1 className="text-3xl my-5 text-sky-600 heading leading-7" >Experience</h1>
    <form onSubmit={handleSubmit} className="w-full ">
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Work Place
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700
    border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="workplace"
            onChange={handleChange}
            name='workplace'
            required
            value={workplace}/>
    </div>
    <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        position
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
    border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
    focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="position"
            onChange={handleChange}
            name='position'
            required
            value={position}/>
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
            onChange={handleChange}
            name='startDate'
            required
            value={startDate}/>
    </div>
    <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        End Date
    </label>
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
    border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
    focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="date"
            placeholder="End date"
            onChange={handleChange}
            name='endDate'
            value={endDate}/>
    </div>
</div>
<div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
   Tasks
</label>
<textarea className="appearance-none block w-full bg-gray-200 text-gray-700
border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-task-name"
        type="date"
        placeholder="tasks"
        onChange={handleChange}
        name='tasks'
        required
        value={tasks}>
    </textarea>
</div>
</div>
<button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Add
    </button>
</form>

<br></br>
<br></br>
</div>
    )
}

