export default function filterByInput(array, input) {
  return array.filter(obj => {
    return obj.name.toLowerCase().indexOf(input.toLowerCase()) !== -1;
  });
}

export function selectyObjectByName(array, name) {
  return array.filter(obj => {
    return obj.name === name;
  });
}
