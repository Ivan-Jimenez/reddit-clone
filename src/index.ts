import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'

const main = async () => {
  const orm = await MikroORM.init({
    dbName: 'reddit_clone',
    user: 'root',
    password: 'root',
    type: 'mysql',
    debug: !__prod__
  })
}