import { Cell } from "./Cell";

export const Row = ({row}) => {
    return (
      <tr>
          {row.map((cell, i)=>(<Cell cellValue={cell} key={i}/>))}
      </tr>
    );
  }