import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
   const users = [
       { id: 1, name: 'FELIPE'},
       { id: 2, name: 'FELIPE'},
       { id: 3, name: 'FELIPE'},
   ]; 

   return response.json(users);
}
