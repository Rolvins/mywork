import React from 'react';

export default class QuestionAdvanceOptions extends React.Component{
    render(){
        return (
            <div>
            <div class="form-group">
              <label for="comment">Add Explanation:</label>
              <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>
            <div class="form-group">
                <label for="usr">Name:</label>
                <input type="text" class="form-control" id="usr">
            </div>

            </div>
        );

    }
}
