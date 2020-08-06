import React  from 'react';

class Filters extends React.Component {  
    render() {    
        return (      
            <div className="ui form">        
                <h3>Characters Gender:</h3>       
                    <div className="field">          
                    <select name="type" id="type" onChange={this.props.onChangeType}>            
                        <option value="all">All</option>            
                        <option value="male">Male</option>            
                        <option value="female">Female</option>            
                        <option value="n/a">N/A</option>          
                    </select>       
                    </div>        
            <div className="field">               
          </div>      
          </div>    
          )  
        }
}

export default Filters

