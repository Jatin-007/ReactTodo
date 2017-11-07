var React = require ('react');
var ReactDOM = require ('react-dom');
var expect = require('expect');
var $ = require ('jQuery');
var TestUtils = require ('react-addons-test-utils');

var TodoSearch = require ('TodoSearch');

describe ('TodoSearch', ()=> {
    it('should exist', ()=> {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with entered input Text', ()=> {
        var spy = expect.createSpy();
        var searchText = 'Dog';
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        
        todoSearch.refs.searchText.value = searchText; // passing out the static value in the refs
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, 'Dog');
    }); 

    it('should call onSearch with proper checked value', ()=> {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;

        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });

    it('Extra test', ()=> {
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.showCompleted.checked = true;
        todoSearch.refs.searchText.value = 'Cat';

        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(true, 'Cat');
    });
});