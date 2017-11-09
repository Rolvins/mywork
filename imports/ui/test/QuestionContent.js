import React from 'react';

export default class QuestionContent extends React.Component{
    render(){
        return (
            <div>
                <div class="form-group">
                  <label for="comment">Comment:</label>
                  <textarea class="form-control" rows="5" id="comment"></textarea>
                </div>
            </div>
        );

    }
}
