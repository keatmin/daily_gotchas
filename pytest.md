## 2021-07-08
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

## 2021-06-18
Given full structure:
```
.
|-- README.md
|-- fraud_detection
|   |-- __init__.py
|   |-- app.py   	-- from data import foo
|   |-- conftest.py
|   `-- data.py
|-- requirements.txt
`-- tests
    |-- __init__.py
    |-- fraud_data.txt
    `-- fraud_detection_test.py -- from fraud_detection.app import bar
```
- Running `python3 fraud_detection/app.py` with relative import `from data import foo` will run successfully, but `pytest tests/` will fail with import error that `data` cannot be imported.
- Changing relative import `from data import foo` to absolute import  `fraud_detection.data import foo` in `fraud_detection/app.py` will make pytest pass but `python3 fraud_detection/app.py` fail with import error that fraud_detection is not a module

### Reasons:
- With `python3 filename.py` at root, the path is where the file is located. Hence relative import works but pytest will fail because pytest does not know where data is located

### Solution:
- Use `python3 -m fraud_detection.app` and have all imports as **absolute import**. Same to `python3 -m pytest tests/`

### Additional thoughts:
- Running `python3 -m pytest tests` is the same as running `pytest`, with the former adding current dir into PATH.
