import {UPDATE_COSTUMER,HISTORY_ADD} from '../types';

const initialState ={
    customers:[
    
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "balance":2000
    },
    {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "balance":3000
    },
    {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "balance":5000
    },
    {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "balance":6000
    },
    {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "balance":9000
    },
    {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "balance":7000
    
    },
    {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "balance":8000
    },
    {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "balance":6000
    },
    {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "balance":4000
    },
    {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
     "balance":2000
    }
    ],
    history: [
        
        {
          "id":1,
          "sender" : "Leanne Graham",
          "receiver" : "Patricia Lebsack",
          "amount": 500,
          "date": "4/11/2021, 10:11:13 PM",
        }
    
      ]
    
};

export const contactReducer=(state = initialState,action) => {
    switch(action.type){

        case UPDATE_COSTUMER:
            return{
                ...state,
                customers:state.customers.map((customer) =>
                customer.id== action.payload.id ? action.payload : customer)
            }
        case HISTORY_ADD:
        return{
          
          ...state,
          history: [action.payload , ...state.history ]
        }

        default:
            return state;
    }
};
