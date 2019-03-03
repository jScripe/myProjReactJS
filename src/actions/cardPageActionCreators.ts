import actionTypes from "./types/actionTypes";
import { response } from "express";

const addCards = (cards: object) => {
    return {
        type: actionTypes.ADD_CARDS,
        cardsByRace: cards,
    }
}

const getCardsByRace = (race: string) => {
    return (dispatch: any) => {
        let stringUrl = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/${race}?locale=ruRU`;
        const headers = new Headers();
        headers.set("X-RapidAPI-Key", "84dce2e327msh37551fd8a64edbbp1e6adajsn6f77e4ba2a91");

        fetch(stringUrl, {
            method: "GET",
            headers: headers
        })
            .then(response => response.json())
            .then((responseJson: any) => {
                dispatch(addCards(responseJson));
            })
            .catch((error: any) => {
                console.log(error);
            })
    }
}

export {
    getCardsByRace 
}