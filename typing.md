## 2021-07-18

When a function does not return anything, most people do:

```python
def foo() -> None:
   raise RuntimeError('no way')
```

With type hints in the later Python versions, a `NoReturn` should be used over `None`:

```python
from typing import NoReturn

def foo() -> NoReturn:
    raise RuntimeError('no way')
```
