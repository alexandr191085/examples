import React , {Component, PureComponent} from 'react'
class Article extends PureComponent{
    constructor(props){
        super(props)

        this.state = {
            count:0
        }
    }
    /*state = {
        isOpen:false
    }*/
   // this.handleClick = handleClick.bind(this)

    componentWillMount(){
        console.log('---', "componentWillMount!!!")
    }

    /*componentWillReceiveProps(nextProps){
        console.log('---', "componentWillReceiveProps")
        if(nextProps.defaultOpen != this.props.defaultOpen) this.setState({
            isOpen:nextProps.defaultOpen
        })
    }*/

    /*shouldComponentUpdate(nextProps, nextState){ // use PureComponent
        return this.state.isOpen !== nextState.isOpen
    }*/
    componentWillUpdate(){
        console.log('---', "componentWillUpdate")
    }
    render(){
        const { article, isOpen , onButtonClick} = this.props
        console.log('---', this.props)
        const body = isOpen && <section>{article.text}</section>
        const style ={width:'50%'}
        return (
            <div className="card mx-auto" style={style}>
                <div className={"card-header"}>
                    <h2 className="card-subtitle" onClick={this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button className="btn btn-primary btn-lg float-right" onClick={onButtonClick}>
                        {isOpen ? 'close':'open'}
                        </button>
                    </h2>
                </div>
               <div className="card-body">
                <h6 className="card-subtitle text-muted">
                    created date: {(new Date(article.date)).toDateString()}
                </h6>
                   {body}
               </div>
            </div>
        )
    }
    incrementCounter = () => {
        this.setState({
            count:this.state.count +1
    })
    }
   /* handleClick = () => {
        console.log('--Article--', 'handlerClick')

       /!* this.setState({isOpen:!this.state.isOpen})*!/
    }*/
}

export default Article