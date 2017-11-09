import React from 'react';

export default class QuestionEntryOptions extends React.Component{
    render(){
        return (
            <div>
                <div class="container text-center col-md-2">
                  <hr>
                      <div class="form-group">
                          <label for="exampleInputEmail1"> Select Subject</label>
                                <select class="form-control" >
                                      <option>Select Subject</option>
                                      <option>Physics</option>
                                      <option>Chemistry</option>
                                      <option>Maths</option>
                              </select>
                             <br>
                             <label for="exampleInputEmail1"> Select Topic</label>
                             <select class="form-control" >
                                   <option>Select Subject</option>
                                   <option>Topic 2</option>
                                   <option>Topic 3</option>
                                   <option>Topic 4</option>
                           </select>
                            <br>
                              <label for="exampleInputEmail1"> Select Question Type</label>
                              <select class="form-control" >
                                  <option>Question Type</option>
                                  <option>Type 1</option>
                                  <option>Type 2</option>
                                  <option>Type 3</option>
                              </select>
                            <br>
                                <label for="exampleInputEmail1">Select Language</label>
                                  <select class="form-control" >
                                      <option>English</option>
                                      <option>Hindi</option>
                                  </select>
                              <br>

                              <input type="text" class="form-control col-sm-1 col-md-1" placeholder="Enter a Tag(s).">
                              <br> <br>
                              <br> <br>
                              <div class="container-fluid">
                                    <div class="input-group">
                                        <input type="text" class="form-control"     placeholder="Search for...">
                                          <span class="input-group-btn">
                                            <button class="btn btn-default" type="button">Add Tag</button>
                                        </span>
                                    </div><!-- /input-group -->
                              </div><!-- /.col-lg-6 -->

                              <button class="btn btn-danger">Submit</button>
                      </div>
                  <hr>
                </div>
            </div>
        );

    }
}
