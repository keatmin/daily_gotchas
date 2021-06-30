## 2021-07-01
```python3
from func_tools import lru_cache


@lru_cache()
def foo():
    return bar
```
This is good enough if you do not need to have TTL

**For async version**
```python3
from async_lru import alru_cache


@alru_cache()
async def foo():
    return await bar
```
This is an exact port from the `lru_cache` version, as mentioned in [docs](https://github.com/aio-libs/async-lru)


If TTL is needed:
```python3
from aiocache import cached, Cache

@cached(ttl=10,cache=Cache.MEMORY)
async def foo():
    return await bar
```
