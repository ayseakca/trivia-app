import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { notification } from 'antd';
import {AutoComplete} from 'primereact/autocomplete';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import { getCategory } from '../utils/APIUtil';



class Category extends Component{

    constructor(){
        super();
        this.state={
            allCategories: [
                {name: "sdadsas", value: "9"}
            ]

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
        const categoryId = this.state.category.id;
        const difficulty = this.state.difficulty;  

        this.props.history.push("/start-quiz", {categoryId: categoryId, difficulty: difficulty});
    }
    

    componentDidMount(){
        getCategory()
            .then(data => {
                this.setState({allCategories: data});        
            }).catch(error => {
                notification.error({
                    message: 'Trivia Game',
                    description: "Upps! Something goes wrong :(",
                });
            });
    }

    render(){
        const difficultyList = [
            {label: 'Easy', value: 'easy'},
            {label: 'Medium', value: 'medium'},
            {label: 'Hard', value: 'hard'},

        ];

        const divStyle = {
            margin:'3%',
        };

        return(
            
            <div >
                <div style={divStyle}> 
                    <AutoComplete  value={this.state.category} suggestions={this.state.filteredCategories} completeMethod={this.filteredCategories} 
                    field="name"
                    size={30} minLength={1} placeholder="Select a Category" dropdown={true} 
                    itemTemplate={this.itemTemplate.bind(this)} onChange={(e) => this.setState({category: e.value})} />
                </div>
                <div style={divStyle}> 
                    <Dropdown value={this.state.difficulty} options={difficultyList} onChange={(e) => {this.setState({difficulty: e.value})}} placeholder="Select Difficulty"/>
                </div>
                <div style={divStyle}>
                    <Button label="Go to Game" icon="pi pi-check" iconPos="right" onClick={() => this.getStart()}/>
                </div>
            </div>
        );
    }


} export default withRouter(Category);