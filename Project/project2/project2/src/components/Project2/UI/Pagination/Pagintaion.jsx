import React from 'react';
import { useGetPageArray } from '../../../../hooks/usePages';
import s from './Pagination.module.css'


const Pagintaion = ({totalPages, page, changePost, }) => {
    let pagesArray = useGetPageArray(totalPages);
    return (
        <div className={s.pagination__wraper}>
            {pagesArray.map(p =>
                <span
                    key={p}
                    className={page === p ? `${s.pagination} ${s.pagination__current}` : `${s.pagination}`}
                    onClick={() => changePost(p)}
                >
                    {p}
                </span>)}
        </div>
    );
};

export default Pagintaion;