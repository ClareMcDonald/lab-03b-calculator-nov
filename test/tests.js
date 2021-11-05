import './example.test.js';

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