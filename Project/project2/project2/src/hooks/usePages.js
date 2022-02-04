import { useMemo } from "react";

export const useGetPageArray = (totalPages) => {
    const result = useMemo(() => {
      let result1 = []
      for (let i = 0; i < totalPages; i++) {
        result1.push(i + 1)
      }
      return result1;
    }, [totalPages])
    return result;
  }