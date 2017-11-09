import React from 'react';

export default class TFOptions extends React.Component{
    render(){
        return (
            <div>
            <div className="container col-md-8">
        <hr/>
         <div className="form-group">
                        {/* option 1 */}
                        <div className="col-md-6">
                            <div className="input-group">
                               <span className="input-group-addon">
                                    <label for="">True  &nbsp </label>

                                 <input type="radio" aria-label="..." name="group1" />
                               </span>
                               <input type="text" className="form-control" aria-label="..." placeholder="Option 1" />
                            </div>
                            {/* <!-- /input-group --> */}
                            <br/>
                            <div className="input-group">
                                    <span className="input-group-addon" >
                                            <label for="">False </label>
                                      <input type="radio" aria-label="..." name="group1"/>
                                    </span>
                                    <input type="text" className="form-control" aria-label="..." placeholder="Option 2"/>
                                 </div>
                                 {/* <!-- /input-group --> */}
                                 <br/>

                                  {/* /.col-lg-6 */}
                        </div>

            </div>
            </div>
            </div>
        );

    }
}
