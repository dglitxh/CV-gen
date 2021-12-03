import { Component } from "react";
import uniqid from 'uniqid'

class Experience extends Component{
    constructor(props){
        super(props);
        this.state = {
                place: '',
                position: '',
                from: '',
                to: '',
                tasks: '',
                id: uniqid()
            }
    }
    
    experience_list = []

    handleChange = (e) => {
        const tag = e.target.name
        const value = e.target.value
        this.setState({
                [tag]: value, 
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.saveExp(this.state)
        console.log(this.state)
        console.log(this.experience_list)
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} id='form'>
                    <label htmlFor='name'>Place </label>
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.place} 
                        name='place' 
                        type='text' 
                        placeholder='Place' 
                        required={true }
                    />
                    <br/><br/>

                    <label htmlFor='position'>Your position </label>
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.position} 
                        name='position' 
                        type='text' 
                        placeholder='position' 
                        required 
                    />
                    <br/><br/>

                    <label htmlFor='from'>From </label>
                    <input  
                        onChange={this.handleChange} 
                        value={this.state.from} 
                        name='from' 
                        type='date' 
                        placeholder='from'  
                    />
                    <br/><br/>

                    <label htmlFor='to'>To </label>
                    <input  
                        onChange={this.handleChange} 
                        value={this.state.to} 
                        name='to' 
                        type='date' 
                        placeholder='to'  
                    />
                    <br/><br/>

                    <label htmlFor='name'>Your tasks </label>
                    <textarea  
                        onChange={this.handleChange} 
                        value={this.state.tasks} 
                        name='tasks' 
                        type='tasks' 
                        placeholder='tasks'  
                    ></textarea>
                    <br/><br/>

                    <button type='submit' className='button'>Add</button>
                </form>
                <div id="preview">
                    <h3> {this.state.place}</h3>
                    <h2> {this.state.position}</h2>
                    <h3> {this.state.from}</h3>
                    <h3> {this.state.to}</h3>
                    <h3> {this.state.tasks}</h3>
                </div>
            </div>
        )
    }
}

export default Experience