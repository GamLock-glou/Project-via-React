import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/Select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => { setFilter({...filter, query: e.target.value}) }}
                placeholder="Search..."

            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue="Sort"
                option={[
                    { value: 'title', name: 'By Name' },
                    { value: 'body', name: 'By description' }
                ]}
            />
        </div>
    );
};

export default PostFilter;