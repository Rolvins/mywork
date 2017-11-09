import React from 'react';

export default class CardTotalTest extends React.Component{
    render(){
        return (
            <div>
                <div class="panel panel-default cards">
                    <div class="panel-body">
                        <div>
                            <i class="fa fa-files-o" aria-hidden="true"></i>                                
                        </div>
                        <div>
                            <h1>Total Mock Tests</h1>
                            <h3>10</h3>                        
                        </div>
                    </div>
                    <div class="panel-footer text-center"><a href="#">Add Mock Test</a></div>
                </div>
            </div>          
        );
                    
    }
}

