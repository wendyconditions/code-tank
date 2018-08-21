const expect = require('expect');
const utils = require('./utils');

describe('Utils', () =>{
    describe('#add', ()=> {
        it('should add two numbers', () => {
            var result = utils.add(33, 11);
            expect(result).toBe(44).toBeA('number');
        });
        
        it('should async add to numbers', (done) => {
            utils.asyncAdd(4,3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        })
    })
    
    
    it('should square a number', () =>{
        var res = utils.square(8);
        expect(res).toBe(64).toBeA('number');
    })
    
    it('should asnyc square a number', (done) => {
        utils.asyncSquare(3, (res) =>{
            expect(res).toBe(9).toBeA('number');
            done();
        })
    })
    
    it('should expect some values', () => {
        //expect(12).toNotBe(11);
        //expect({name: 'Wendy'}).toEqual({name: 'Wendy'});
        //expect([2,3,4]).toInclude(3);
        expect({name: 'wendy', age: 32}).toInclude({
            age: 32
        });
    });
    
    it('should verify first and last name are set', () =>{
        var res = utils.setName({}, 'Wendy Maldonado');
        expect(res).toIncludeKeys(['firstName', 'lastName']);
    });
})