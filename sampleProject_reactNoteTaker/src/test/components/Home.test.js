import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';


const Home = React.createClass({
    render:function(){
        return (
             <h2 className="text-center">
                 Search by Github account
                 </h2>

        )
    }
});
describe('Home component',()=>{
    it('should return header',()=>{
        const renderer = TestUtils.createRenderer();
        renderer.render(<Home/>);
        const output = renderer.getRenderOutput();
        console.log(output);
    });
});

