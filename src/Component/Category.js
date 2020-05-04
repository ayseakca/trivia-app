import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { notification } from 'antd';
import {AutoComplete} from 'primereact/autocomplete';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import { getCategory } from '../utils/APIUtil';
import '../CSS/Category.css'
import GetLotties from '../LottieComponent/GetLotties';
import bookLottie from '../LottieJson/books.json';
import loading from '../LottieJson/loading.json';
import Welcome from './Welcome';


class Category extends Component{

    constructor(){
        super();
        this.state={
            allCategories: [
                {name: "sdadsas", value: "9"}
            ],
            loading: false

        };

        this.filteredCategories = this.filteredCategories.bind(this);
    }

    filteredCategories(event) {
        setTimeout(() => {
            let results;
       
            if (event.query.length === 0) {
                results = [...this.state.allCategories.trivia_categories];
                
            }
            else {
                results = this.state.allCategories.trivia_categories.filter((category) => {
                    return category.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            this.setState({ filteredCategories: results });
        }, 250);
    }

    itemTemplate(category) {
        return (
            <div className="p-clearfix">
                <div style={{ fontSize: '16px', float: 'left', margin: '10px 10px 0 0' }}>{category.name}</div>
            </div>
        );
    }

    getStart(){
       
        if( this.state.category == null || this.state.difficulty == null){         
            notification.error({
                message: 'Trivia Game',
                description: "Please, Select a Category and Difficulty."
            });
                <div><Category/></div>
            );
            this.props.history.push("/");

        }else{
            const categoryId = this.state.category.id;
            const difficulty = this.state.difficulty;
            this.props.history.push("/start-quiz", {categoryId: categoryId, difficulty: difficulty});

        }
    }

    componentDidMount(){
        this.setState({loading: true});
        getCategory()
            .then(data => {
                this.setState({loading: false});
                this.setState({allCategories: data});        
            }).catch(error => {
                this.setState({loading: false});
                notification.error({
                    message: 'Trivia Game',
                    description: "Upps! Something goes wrong.",
                });
                window.location.reload(false);
                
            });
    }

    render(){
        const difficultyList = [
            {label: 'Easy', value: 'easy'},
            {label: 'Medium', value: 'medium'},
            {label: 'Hard', value: 'hard'},

        ];


        return(
            
            <div >
                {this.state.loading ? <div className="loading">
            <h2> Loading...</h2> 
            <div className="gameOverLottieStyle"> <GetLotties animationData={loading}/></div>
                </div> : ""}
			    <div className="divLottie">
                    <div className='lotties'>
                        <GetLotties animationData={bookLottie} />  
                    </div>                        
                </div>
                <div className="header">
                    <h2>WELCOME TO TRIVA GAME</h2>
                </div>
                <div className="divStyle">
                    <div className="dropdown"> 
                        <AutoComplete  value={this.state.category} suggestions={this.state.filteredCategories} completeMethod={this.filteredCategories} 
                        field="name"
                        size={30} minLength={1} placeholder="Select a Category" dropdown={true} 
                        itemTemplate={this.itemTemplate.bind(this)} onChange={(e) => this.setState({category: e.value})} />
                    </div>
                    <div className="dropdown"> 
                        <Dropdown value={this.state.difficulty} options={difficultyList} onChange={(e) => {this.setState({difficulty: e.value})}} placeholder="Select Difficulty"/>
                    </div>
                    <div className="dropdown">
                        <Button label="Go to Game" icon="pi pi-check" iconPos="right" onClick={() => this.getStart()}/>
                    </div>
                </div>
            </div>
        );
    }


} export default withRouter(Category);