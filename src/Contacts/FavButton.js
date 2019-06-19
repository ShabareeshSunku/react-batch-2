import React from 'react';
import FavoritesContext from './FavoritesContext'
// export default function FavButton(props) {
//     return (
//         <FavoritesContext.Consumer>
//             {
//                 (contextData) => {
//                     console.log('==>contextData', contextData)
//                     const currentFavs = contextData.favorites || []
//                     const userId = props.userId
//                     const isFavorited = currentFavs.indexOf(userId) !== -1 ? true : false
//                     return (
//                         <span
//                             className={isFavorited ? 'favButton fa fa-heart' : 'favButton fa fa-heart-o'}
//                             onClick={() => {
//                                 if (isFavorited) {
//                                     contextData.removeFavorite(userId)
//                                 } else {
//                                     contextData.addFavorite(userId)
//                                 }
//                             }}></span>
//                     )
//                 }
//             }
//         </FavoritesContext.Consumer>

//     )
// }

function FavButton(props) {
    console.log(props)
    const currentFavs = props.favorites || []
    const userId = props.userId
    const isFavorited = currentFavs.indexOf(userId) !== -1 ? true : false
    return (
        <span
            className={isFavorited ? 'favButton fa fa-heart' : 'favButton fa fa-heart-o'}
            onClick={() => {
                if (isFavorited) {
                    props.removeFavorite(userId)
                } else {
                    props.addFavorite(userId)
                }
            }}></span>
    )
}

export default function ContextWrapper(props) {
    return (
        <FavoritesContext.Consumer>
            {
                (contextData) => {
                    const propsObj = Object.assign({}, props, contextData)
                    return <FavButton {...propsObj} />
                }
            }
        </FavoritesContext.Consumer>
    )
}