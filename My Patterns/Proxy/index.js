function networkFetch(url) {
  return `${url} - Новый овтет`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];
    if (cache.has(url)) {
      return `${url} - Кешированный овтет`
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  }
});

console.log(proxiedFetch('123e'));
console.log(proxiedFetch('123e'));
