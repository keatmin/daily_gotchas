# 24-08-2021

## Aiohttp Client settings

```python
import aiohttp


class HttpClient:
    session: aiohttp.ClientSession = None

    def start(self):
        self.session = aiohttp.ClientSession(
            connector=aiohttp.TCPConnector(force_close=True),
            timeout=aiohttp.ClientTimeout(total=5)
        )

    async def stop(self):
        await self.session.close()
        self.session = None

    def __call__(self) -> aiohttp.ClientSession:
        assert self.session is not None
        return self.session
```

1. Having a singleton like `HttpClient`, can be used in conjucntion with your web server that makes 3rd party API call. Only initialize the session once at the beginning of the startup

2. `aiohttp.TCPConnector(force_close=True)` will fix the bug where sometimes connection pool is not released after request.

3. `aiohttp.ClientTimeout(total=5)` sets timeout for your requests, in seconds. Response that takes longer that 5 seconds will throw a TimeoutError
