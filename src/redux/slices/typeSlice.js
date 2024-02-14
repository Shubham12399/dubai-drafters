import { createSlice } from "@reduxjs/toolkit";

const typeSlice = createSlice({
    name:"Type",
    initialState:{
        id: 'Top_Tour_1',
        title: 'Top Tour',
        tours: [],
        image: '/src/assets/images/travel 1920x450 banner.png',
        subtitle: 'Top Tour in Cities',
        description: 
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore, adipisci beatae dicta deserunt, non velit quas obcaecati cumque saepe exercitationem explicabo ipsum eum consequuntur optio earum nostrum dolor. Nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore, adipisci beatae dicta deserunt, non velit quas obcaecati cumque saepe exercitationem explicabo ipsum eum consequuntur optio earum nostrum dolor. Nam?',
    },
    reducers:{
        setType : (state, action) => {
            return {...action.payload};
        }
    }
});

export default typeSlice.reducer;
export const {setType} =  typeSlice.actions;