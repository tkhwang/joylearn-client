export default function filterByInput(array, input) {
  return array.filter(obj => {
    return obj.name.indexOf(input) !== -1;
  });
}
