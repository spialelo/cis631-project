import React from 'react';
import PropTypes from 'prop-types';

const initialState= {
    assign: {
        instr_id:'',
        class_id:'',
        start: '',
        dur: '',
        date: ''
    },
    register: {
        mid: '',
        class_id: ''
    }
};

class UpdateTable extends React.Component{

    constructor() {
        super();
        this.state = {
            assign: {
                instr_id:'',
                class_id:'',
                start: '',
                dur: '',
                date: ''
            },
            register: {
                mid: '',
                class_id: ''
            }
        };

        this.assignInstructor = this.assignInstructor.bind(this);
        this.registerClass = this.registerClass.bind(this);
        this.addExerciseClass = this.addExerciseClass.bind(this);
  
        this.renderView = this.renderView.bind(this);
    }
    
    componentWillMount() {
        // use prop types and look at pathname so we can use this
        const path = this.props.location.pathname.split('/')[1];
        this.setState({ path }, ()=>{
            console.log(path);
        });
    }

    componentDidMount() {
        console.log(this.props.location.pathname);
       this.getObjects();
      }
    
    getObjects = _ => {
        if(!this.state.path) {
            return;
        }

        const url = 'http://localhost:9000/'+this.state.path;

        // fetch(url)
        //     .then(response => response.json())
        //     .then(response => this.setState({ data: response.data}, this.renderTable()))
        //     .catch(err => console.error(err));
    }

    assignInstructor(e) {
        e.preventDefault();
        const state = this.state;
        const { instr_id, class_id, start, dur, date } = state.assign;
        const url = 'http://localhost:9000/assign-to-class?instr_id='+instr_id+'&class_id='+class_id+'&start='+start+'&dur='+dur+'&date='+date;
        console.log('assign');
        fetch(url)
          .then(response => response.json())
          .then(response => this.setState({ data: response.data}, () => {
              this.setState({state: Object.assign({}, state, initialState)});
          }))
          .catch(err => console.error(err));
    }

    registerClass(e) {
        e.preventDefault();
        const state = this.state;
        const { mid, class_id } = state.register;
        console.log('register');
        const url = 'http://localhost:9000/register-for-class?mid='+mid+'&class_id='+class_id;
        fetch(url)
          .then(response => response.json())
          .then(response => this.setState({ data: response.data}, () => {
              this.setState({state: Object.assign({}, state, initialState)});
          }))
          .catch(err => console.error(err));
    }

    addExerciseClass () {
        fetch('http://localhost:9000/add-class?add=')
          .then(response => response.json())
          .then(response => this.setState({ flights: response.data}))
          .catch(err => console.error(err));
      }

      renderAssign() {
        const state = this.state;
          return (
            <div>
            <p>Assign Instructor</p>
            <label key="instr">Instructor  ID:
            <input type="text" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {instr_id: e.target.value})})}} name="" id="input-instructor" className="form-control" value={state.assign.instr_id} required="required" title=""/>
            </label>

            <label key="class">Class ID:
            <input type="text" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {class_id: e.target.value})})}} name="" id="input-class" className="form-control" value={state.assign.class_id}  required="required" title=""/>
            </label>

            <label key="start">Start: 
            <input type="time" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {start: e.target.value})})}} name="" id="input-start" className="form-control" value={state.assign.start} required="required" title=""/>
            </label>

            <label key="duration">Duration:
            <input type="text" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {dur: e.target.value})})}} name="" id="input-duration" className="form-control" placeholder="hh:mm:ss" value={state.assign.dur} required="required" title=""/>
            </label>

            <label key="date">Date:
            <input type="date" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {date: e.target.value})})}} name="" id="input-date" className="form-control" value={state.assign.date} required="required" title=""/>
            </label>
            <br/>
            <br/>
            <button type="submit" onClick={this.assignInstructor}>Assign Instructor</button>
        </div>
          );
      }

      renderRegister() {
        const state = this.state;
        return(
            <div>
                <p>Register for Class</p>
                <label>Member  ID:
                <input type="text" onChange={(e)=>{this.setState({register: Object.assign({}, state.register, {mid: e.target.value})})}} name="" id="input-member" placeholder="Enter member ID" className="form-control" value={state.register.mid} required="required" title=""/>
                </label>

                <label>Class ID:
                <input type="text" onChange={(e)=>{this.setState({register: Object.assign({}, state.register, {class_id: e.target.value})})}} name="" id="input-class" placeholder="Enter class ID" className="form-control" value={state.register.class_id}  required="required" title=""/>
                </label>
                <br/>
            <br/>
            <button type="submit" onClick={this.registerClass}>Register for Class</button>
            </div>
        );
      }

      renderAddClass() {
        const state = this.state;
        return (
          <div>
              <p>Add Class</p>
          <label key="class-id">Class  ID:
          <input type="text" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {instr_id: e.target.value})})}} name="" id="input-cid" className="form-control" value={state.assign.instr_id} required="required" title=""/>
          </label>

          <label key="exe-id">Exe ID:
          <input type="text" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {class_id: e.target.value})})}} name="" id="input-exid" className="form-control" value={state.assign.class_id}  required="required" title=""/>
          </label>


          <label key="exe-build">Building:
          <input type="text" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {dur: e.target.value})})}} name="" id="input-build" className="form-control" placeholder="" value={state.assign.dur} required="required" title=""/>
          </label>


          <label key="room">Room:
          <input type="text" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {dur: e.target.value})})}} name="" id="input-room" className="form-control" placeholder="Description(under 30 characters)" value={state.assign.dur} required="required" title=""/>
          </label>
          <br/>
          <br/>
          <button type="submit" onClick={this.assignInstructor}>Add Class</button>
      </div>
        );
      }

      renderAddExercise() {
        const state = this.state;
        return (
          <div>
              <p>Add Exercise</p>
          <label key="exe-id">Exe  ID:
          <input type="text" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {instr_id: e.target.value})})}} name="" id="input-id" className="form-control" value={state.assign.instr_id} required="required" title=""/>
          </label>

          <label key="exe-type">Exe Type:
          <input type="text" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {class_id: e.target.value})})}} name="" id="input-type" className="form-control" value={state.assign.class_id}  required="required" title=""/>
          </label>


          <label key="exe-name">Exe Name:
          <input type="text" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {dur: e.target.value})})}} name="" id="input-name" className="form-control" placeholder="" value={state.assign.dur} required="required" title=""/>
          </label>


          <label key="exe-desc">Exe Description:
          <input type="text" onChange={(e)=>{this.setState({assign: Object.assign({}, state.assign, {dur: e.target.value})})}} name="" id="input-desc" className="form-control" placeholder="Description(under 30 characters)" value={state.assign.dur} required="required" title=""/>
          </label>
          <br/>
          <br/>
          <button type="submit" onClick={this.assignInstructor}>Add Exercise</button>
      </div>
        );
      }

    renderView(location) {
        
        let view;
        switch(location) {
            case 'assign-to-class': 
            view = this.renderAssign();
            break;
            case 'register-for-class': ;
            view = this.renderRegister();
            break;
            case 'add-class': ;
            view = this.renderAddClass();
            break;
            case 'add-exercise': ;
            view = this.renderAddExercise();
            break;
            default:
            break;
        }
        return (
            <div>{view}</div>
        );
    }

    render(){
        // const path = this.state.path ? this.state.path : undefined;
        return(
            <div>
                {this.renderView(this.state.path)}
            </div>
            );
    }
    
}

UpdateTable.propTypes = {
    headers: PropTypes.array,
    location: PropTypes.object
};

export default UpdateTable;