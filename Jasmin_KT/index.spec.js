
describe('Hello world', () => {

    afterAll(() =>{ //1
        //whatever your want to clear can be done here
    })

    beforeAll(() =>{ //1
        //whatever prequisites do here
    })

    beforeEach(() =>{ //3
        //whatever need for run before each test case
    })

    afterEach(() =>{ //3
        //whatever need for run after each test case
    })

    it('Should return Hello world Ragu for calling helloworld method', ()=>{
        expect(printHelloWorld('Ragu')).toEqual('Hello World Ragu');
    });

    it('Should return Hello world for calling helloworld method with null input parameter', ()=>{
        expect(printHelloWorld(null)).toEqual('Hello World');
    })

    it('Should return Hello world for calling helloworld method with null input parameter', ()=>{
        expect(printHelloWorld(null)).toEqual('Hello World');
    })


})