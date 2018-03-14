import React, { Component } from 'react';

class HeaderSearch extends Component{
    render(){
        return(
            <section className="homepage">
                <div className="container">
                    <div className='row'>
                        <div className="content text-center">                                     
                            <div className="search_frm">
                                <form>
                                    <input type="search" name="query" placeholder="What type of work do you need?"/>
                                    <input type="submit" value="GET STARTED"/>
                                </form>
                                <span>
                                    <b>Offer:</b>
                                    <a href="/explore/psd-to-html-30.html">Mobile</a>,
                                    <a href="/explore/logo-design-10.html">TV</a>,
                                    <a href="#">...</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>           
            </section>
        );
    }
}
export default HeaderSearch;