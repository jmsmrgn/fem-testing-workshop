import axios from 'axios'
import startServer from '../start-server'

let server

beforeAll(() => {
  return startServer().then(s => {
    server = s
  })

})

afterAll(done => {
  server.close(done)
})

test('can get users', () => {
  return axios.get('http://localhost:3001/api/users')
    .then(response => {
      const user = response.data.users[0]
      expect(user).toMatchObject({
        name: expect.any(String),
        username: expect.any(String),
      })
    })
})

test('can get users at offset 3', () => {
  const fiveUsersPromise = axios
    .get('http://localhost:3001/api/users?limit=5')
    .then(response => response.data.users)
  const twoUsersPromise = axios
    .get('http://localhost:3001/api/users?limit=2&offset=3')
    .then(response => response.data.users)
  return Promise
    .all([fiveUsersPromise, twoUsersPromise])
    .then(responses => {
      const [fiveUsers, twoUsers] = responses
      const [firstUser, secondUser] = twoUsers
      const [, , , firstUserAll, secondUserAll] = fiveUsers
      expect(firstUser).toEqual(firstUserAll)
      expect(secondUser).toEqual(secondUserAll)
    })
})
