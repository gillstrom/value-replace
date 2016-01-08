import test from 'ava';
import m from './';

test('string', t => {
	const obj = {
		a: 'yo',
		b: 'what',
		c: 'is',
		d: 'up'
	};

	const expected = {
		a: 'hello',
		b: 'what',
		c: 'is',
		d: 'up'
	};

	t.same(m(obj, 'yo', 'hello'), expected);
});

test('regexp', t => {
	const obj = {
		a: 'yo',
		b: 'what',
		c: 'is',
		d: 'up'
	};

	const expected = {
		a: 'yo',
		b: 'sun',
		c: 'is',
		d: 'up'
	};

	t.same(m(obj, /what/, 'sun'), expected);
});

test('function', t => {
	const obj = {
		a: 'yo',
		b: 'what',
		c: 'is',
		d: 'up'
	};

	const expected = {
		a: 'YO',
		b: 'what',
		c: 'is',
		d: 'up'
	};

	t.same(m(obj, 'yo', str => {
		return str.toUpperCase();
	}), expected);

});
