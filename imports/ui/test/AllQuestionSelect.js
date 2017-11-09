import React from 'react';

export default class AllQuestionSelect extends React.Component{
    render(){
        return (
            <div>
                <div class="container text-center">
                  <hr>
                    <div class="row form-inline">
                      <select class="form-control" >
                        <option>Subject</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Maths</option>
                      </select>
                      &nbsp;&nbsp;
                      <select class="form-control" >
                              <option>Select Topic</option>
                              <option>Topic 1</option>
                              <option>Topic 2</option>
                              <option>Topic 3</option>
                      </select>
                      &nbsp;&nbsp;

                      <select class="form-control" >
                              <option>Question Type</option>
                              <option>Type 1</option>
                              <option>Type 2</option>
                              <option>Type 3</option>
                      </select>
                      &nbsp;&nbsp;

                      <select class="form-control" >
                              <option>English</option>
                              <option>Hindi</option>
                      </select>
                      &nbsp;&nbsp;

                      <input type="text" class="form-control"  placeholder="Enter a Tag">
                      &nbsp;&nbsp;

                      <button class="btn btn-primary">Apply and Show</button>
                      &nbsp;&nbsp;

                      <button class="btn btn-success">
                          <i class="fa fa-plus" aria-hidden="true"></i>
                          Add Question</button>


                    </div>
                  <hr>
                </div>
            </div>
        );

    }
}
