const url = 'http://localhost:3333';
const opts = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {}
};

export async function api(data) {
  opts.body = JSON.stringify(data)
  await fetch(url, opts);
  // const res = await response.json();
  // console.log(data)
  return true;
}

export function has(obj, property) {
  if (!obj) return false
  return property in obj
}