import { Component } from "react";

class Education extends Component{
    constructor(props){
        super(props);
        this.state = {
                place: '',
                program: '',
                from: '',
                to: '',
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
        this.setState({
            // might change push to concat later
         education_list: this.education_list.push(this.state),
            // place: '',
            // program: '',
            // from: '',
            // to: '',
            // tasks: ''
        })
        console.log(this.state)
        console.log(this.education_list)
        
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

                    <label htmlFor='program'>Your program </label>
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.program} 
                        name='program' 
                        type='text' 
                        placeholder='program' 
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

                   

                    <button type='submit' className='button'>Add</button>
                </form>

            </div>
        )
    }
}

export default Education