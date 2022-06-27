const url = 'http://localhost:3333';
const opts = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {}
};

export async function api(data) {
  opts.body = JSON.stringify(data)
  const response = await fetch(url, opts);
  const res = await response.json();
  console.log(data)
  return true;
  // this.setState({ postId: data.id });
}