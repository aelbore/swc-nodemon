import polka from 'polka'

import Users from './users'

polka()
  .listen(3000, () => console.log(`> Running on localhost:3000`))
  .use(Users.pattern, Users.routes)