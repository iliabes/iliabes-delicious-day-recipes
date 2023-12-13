// import axios from "axios";

// export default {


//         sortPostMax(state) {
//             let sortedPost = [...state.posts].filter((item) => {
//                 const integer = item.id % 2;
//                 return integer !== 0;
//             });

//             return sortedPost;
//         },
//         findValue(state, getters) {
//             return getters.sortPostMax.filter((item) => {
//                 return item.title.includes(state.serchInput)
//             });
//         },
    

//     namespaced: true,
// }