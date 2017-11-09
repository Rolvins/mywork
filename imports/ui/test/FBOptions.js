import React from 'react';

export default class FBOptions extends React.Component{
    render(){
        return (
            <div>
            <div class="container col-md-8">
        <hr>
         <div class="form-group">
                        <!-- option 1 -->
                        <div class="col-md-6">
                                <div class="input-group">
                                        <span class="input-group-addon" id="basic-addon1">Correct Option</span>
                                        <input type="number" class="form-control" placeholder="Numeric Value" aria-describedby="basic-addon1">
                                </div>



                        </div><!-- /.col-lg-6 -->


                      </div>  <!-- end of form-group -->
     </div><!-- end of container -->


            </div>
        );

    }
}
