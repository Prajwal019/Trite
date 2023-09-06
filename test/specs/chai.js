import { expect,assert } from "chai";
describe('chai',()=>{
    it('sample',async()=>{
         const f="air";
        // assert.typeOf(f,'String',"hi")
        // assert.equal(f,'air','f equal air')
        // assert.lengthOf(f,3,"length of f is 2")
        expect("Inia").to.have.lengthOf(5)
    })
})