import React , {Component} from 'react'
import Article from '../Acticle'
import './style.css'
export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }
    render() {
        const articleElements = this.props.articles.map((article, index) =>
            <li key={article.id} className='article-list__li' >
                <Article article={article} isOpen = {this.state.openArticleId === article.id}
                onButtonClick = {this.handlerClick.bind(this, article.id)}
                />
            </li>
        )
        return (
            <ol>
                {articleElements}
            </ol>
        )
    }
    handlerClick = openArticleId => {
        this.setState({
            openArticleId: this.state.openArticleId === openArticleId ? null: openArticleId
        })
    }
}
