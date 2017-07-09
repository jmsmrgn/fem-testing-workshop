export default arrayify

function arrayify(thing = []) {
  if (thing instanceof Array) {
    return thing
  }
}
