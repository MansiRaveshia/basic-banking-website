
import{UPDATE_COSTUMER,HISTORY_ADD} from './types';

export const updateCustomer = (customer) => ({
    type:UPDATE_COSTUMER,
    payload:customer
})

export const historyadd = (customer) => {
    return{
      type:HISTORY_ADD,
      payload: customer,
    }
   
  }