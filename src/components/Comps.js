import React from 'react'
export class A extends React.Component{
    constructor(props){
        super(props)
        this.inp = null;
    }
    
    componentDidMount() {
        console.log(this.inp)
    }
    render(){
        return <>
        <input type="text" ref={(inp) => this.inp = inp}/>
        <h1>A{this.props.a}</h1>
        </>
    }
}