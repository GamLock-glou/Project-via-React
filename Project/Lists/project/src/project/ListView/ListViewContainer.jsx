import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../Redux/listsItemReducer";
import ListView from "./ListView";


const mapStateToProps = (state) => {
    return {
        posts: state.listsItem.posts,
        newText: state.listsItem.newPostText,
    }
}

const mapDispatchToProps = {addPostActionCreator, updateNewPostTextActionCreator};

export const ListViewContainer = connect(mapStateToProps, mapDispatchToProps)(ListView);