import React , {Component,PureComponent} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'


class App extends PureComponent{
    state={
        reverted:false
    }
    //articles  = articles.slice()
    render() {
       // const articleList = this.state.reverted ? articles.reverse() : articles
        console.log('---', "2 render", this.state, articles.map(article => article.id))
       return( <div className="container">
        <div className="jumbotron">
            <h1 className='display-3'>Articles list
            <button className='btn' onClick={this.revert}>Revert</button>
            </h1>
        </div>
            <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
           </div>
       )
    }
    revert = () => {
       // this.articles.reverse()
        console.log('---', "1 revert")
        this.setState({
            reverted:!this.state.reverted
        });

    }
}

export default App