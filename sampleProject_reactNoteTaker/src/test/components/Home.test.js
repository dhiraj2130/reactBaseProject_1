import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Home from '../../app/components/Home';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
// expect-jsx is used for better error message when test fails
//https://egghead.io/lessons/react-testing-the-redux-store-multiple-actions?series=react-testing-cookbook
describe('Home component',()=>{

    function getRenderer(){
    const renderer = TestUtils.createRenderer();
    renderer.render(<Home/>);
    const actual = renderer.getRenderOutput();
    return actual;
}
    it('should return header',()=>{

        const expected =<h2 className="text-center"> Search by Github account </h2>;
        expect(getRenderer()).toIncludeJSX(expected);
    });


    it('should test the type of root object',()=>{

    expect(getRenderer().type).toEqual('h2');
    });

    it('should test the class name object',()=>{

    expect(getRenderer().props.className.includes('text-center')).toEqual(true);
    });

    it('should test the children',()=>{

        expect(getRenderer().props.children.includes('text-center')).toEqual(true);
    });
});

