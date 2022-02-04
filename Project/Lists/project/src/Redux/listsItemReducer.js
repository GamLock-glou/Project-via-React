const AddPost = "ADD_POST";
const UpdateNewPostText = "UPDATE_NEW_POST_TEXT";


let initialState = {
    posts: [
        {id: 1, title: 'Carried out', items: [ 
                                            {id: 1, title: 'Dota 1.0'},
                                            {id: 2, title: 'Dota 2.0'}
                                        ]
        },
        {id: 2, title: 'Progress', items: [ 
                                            {id: 1, title: 'Dota 1'},
                                            {id: 2, title: 'Dota 2'}
                                        ]
        }
    ],
    newPostText: ''
};

export const listsItemReducer = (state = initialState, action) =>{
    switch (action.type){
        case AddPost: {
            let newItem = {
                id: state.posts,
                title: state.newPostText,
            };
            const post = {
                ...state.posts[0],
                items: [...state.posts[0].items, newItem]
            } 

            return {
                ...state,
                posts: [post, state.posts[1]],
                newPostText: ''
            };
        }
        case UpdateNewPostText: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return initialState
    }
}

export const addPostActionCreator = () => ({type: AddPost})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UpdateNewPostText, newText: text })