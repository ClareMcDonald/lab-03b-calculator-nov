import { add } from '../math-utils.js'
import { subtract } from '../math-utils.js';
import { multiply } from '../math-utils.js';
import { divide } from '../math-utils.js';

const test = QUnit.test;

test('add() should take in 1 and 1 and return 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(1, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract() should take in 3 and 2 and return 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(3, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);

});

test('multiply() should take in 3 and 2 and return 6', (expect) => {
//Arrange
    // Set up your arguments and expectations
    const expected = 6;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(3, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected)
});

test('ivide() should take in 6 and 3 and return 2', (expect) => {
//Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(6, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected)
});