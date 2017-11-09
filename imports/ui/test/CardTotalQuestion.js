import React from 'react';

export default class CardTotalQuestion extends React.Component{
    render(){
        return (
            <div>
                <div class="panel panel-default cards">
                    <div class="panel-body">
                        <div>
                            <i class="fa fa-list-alt fa-5x" aria-hidden="true"></i>
                        </div>
                        <div>
                            <h1>Total Questions</h1>
                            <h3>10</h3>                        
                        </div>
                    </div>
                    <div class="panel-footer text-center"><a href="#">Add Question</a></div>
                </div>
            </div>          
        );
                    
    }
}

