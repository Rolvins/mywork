import React from 'react';

export default class MCQOptions extends React.Component{
    render(){
        return (
            <div>
            <div class="container col-md-8">
        <hr>
         <div class="form-group">
                        <!-- option 1 -->
                        <div class="col-md-6">
                            <div class="input-group">
                               <span class="input-group-addon">
                                 <input type="radio" aria-label="..." name="group1">
                               </span>
                               <input type="text" class="form-control" aria-label="...">
                            </div><!-- /input-group -->
                            <br>
                            <div class="input-group">
                                    <span class="input-group-addon">
                                      <input type="radio" aria-label="..." name="group1">
                                    </span>
                                    <input type="text" class="form-control" aria-label="...">
                                 </div><!-- /input-group -->
                                 <br>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <input type="radio" aria-label="..." name="group1">
                                </span>
                                <input type="text" class="form-control" aria-label="...">
                                </div><!-- /input-group -->
                                <br>
                                <div class="input-group">
                                        <span class="input-group-addon">
                                            <input type="radio" aria-label="..." name="group1">
                                        </span>
                                        <input type="text" class="form-control" aria-label="...">
                                        </div><!-- /input-group -->
                                        <br><div class="input-group">
                                                <span class="input-group-addon">
                                                    <input type="radio" aria-label="..." name="group1">
                                                </span>
                                                <input type="text" class="form-control" aria-label="...">
                                                </div><!-- /input-group -->
                                                <br>
                        </div><!-- /.col-lg-6 -->


                      </div>  <!-- end of form-group -->
     </div><!-- end of container -->

            </div>
        );

    }
}
