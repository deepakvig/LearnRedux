var React = require('react');
var expect = require('expect');
var TodoApp = require('TodoApp');
var $ = require('jQuery');
var TestUtils = require('react/lib/ReactTestUtils');

describe('TodoApp', () => {
	it('should exist', () => {
		expect(TodoApp).toExist();
	});	
	
	it('should add todo to the todos state on handleAddTodo', () => {
		var todoText = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		
		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);
		
		expect(todoApp.state.todos[0].text).toBe(todoText);
	});
})