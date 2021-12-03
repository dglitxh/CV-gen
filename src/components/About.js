import { Component } from "react";
import uniqid from "uniqid"

class About extends Component{
    constructor(props){
        super(props);
        this.state = {
                name_: '',
                age: '',
                address: '',
                phone: '',
                email: '', 
                id: uniqid()
            }
        this.about_list = []

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
        
        console.log(this.state)
    }

    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} id='form'>
                    <label htmlFor='name'>Your Name </label>
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.name_} 
                        name='name_' 
                        type='text' 
                        placeholder='Name' 
                        required={true }
                    />
                    <br/><br/>

                    <label htmlFor='age'>Your Age </label>
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.age} 
                        name='age' 
                        type='number' 
                        placeholder='age' 
                        required 
                    />
                    <br/><br/>

                    <label htmlFor='address'>Your Address </label>
                    <input  
                        onChange={this.handleChange} 
                        value={this.state.address} 
                        name='address' 
                        type='text' 
                        placeholder='address'  
                    />
                    <br/><br/>

                    <label htmlFor='phone'>Your Number </label>
                    <input  
                        onChange={this.handleChange} 
                        value={this.state.phone} 
                        name='phone' 
                        type='number' 
                        placeholder='phone'  
                    />
                    <br/><br/>

                    <label htmlFor='name'>Your Email </label>
                    <input  
                        onChange={this.handleChange} 
                        value={this.state.email} 
                        name='email' 
                        type='email' 
                        placeholder='email'  
                    />
                    <br/><br/>

                    <button type='submit' className='button'>Add</button>
                </form>
                <div id="preview">
                    <h3> {this.state.name_}</h3>
                    <h2> {this.state.age}</h2>
                    <h3> {this.state.address}</h3>
                    <h3> {this.state.phone}</h3>
                    <h3> {this.state.email}</h3>
                </div>
            </div>
            
        )
    }
}

export default About