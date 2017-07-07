import getTokenFromHeader from '../get-token-from-header'

test('getTokenFromHeader returns null if there is no token', () => {
  const req = getReq()
  const result = getTokenFromHeader(req)
  expect(result).toBeNull()
})

test('getTokenFromHeader returns the token when provided', () => {
  const token = 'some.token.thing'
  const authorization = `Token ${token}`
  const req = getReq(authorization)
  const result = getTokenFromHeader(req)
  expect(result).toBe(token)
})

function getReq(authorization) {
  return {headers: {authorization}}
}

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=API%20Unit&em=hello@jmsmrgn.com*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
