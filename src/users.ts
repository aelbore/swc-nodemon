import polka from 'polka'
import type { Request, Response } from 'polka'

import send from '@polka/send'

export default {
  routes: polka().get('/', 
    (_: Request, res: Response) => {
      send(res, 200, [
        {
          "id": 1,
          "name": "Jane",
          "username": "Bret",
          "email": "Sincere@april.biz"
        }])
    }),
  pattern: '/api/users'
}