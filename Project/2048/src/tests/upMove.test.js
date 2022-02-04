import { MoveUp } from '../scripts/moveCell'

test('test 1. Up move', ()=>{
    expect(MoveUp([[1, 2, 2, 4], 
                     [1, 0, 0, 0], 
                     [2, 0, 2, 0], 
                     [4, 0, 0, 2]])).toEqual(2)
})

