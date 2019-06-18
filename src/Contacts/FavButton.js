import React from 'react';

export default function FavButton(props) {
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