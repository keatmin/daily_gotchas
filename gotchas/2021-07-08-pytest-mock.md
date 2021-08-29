---
slug: python-pytest-mock
title: Pytest Mock
authors: keatmin
tags: [python, pytest]
---

### Unit testing on a function whether an exception is properly raised
- Using `pytest.raises`

```python
import pytest

def test_func_division_error():
    with pytest.raises(ZeroDivisionError):
        9/0
```

- To allow an exception to be raised, the decorator `@pytest.mark.xfail(raise=ZeroDivisionError)` can be used. However note that it is only allowing `ZeroDivisionError` to be raised and not testing whether the func will raise an Exception.

Additional Tips from @jianshen92:
If mocking a function and expect the function to throw error:

```python
with patch("function_to_mock") as f:
  f.side_effect = ZeroDivisionError
```
Useful when function has a third party call
