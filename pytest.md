## 2021-06-18
Given full structure:
```
.
|-- README.md
|-- fraud_detection
|   |-- __init__.py
|   |-- app.py   								-- from data import foo
|   |-- conftest.py
|   `-- data.py
|-- requirements.txt
`-- tests
    |-- __init__.py
    |-- fraud_data.txt
    `-- fraud_detection_test.py -- from fraud_detection.app import bar
```
- Running `python3 -m fraud_detection.app.py` will run successfully, but `pytest tests/` will fail with import error
- Changing `from data import foo` to `fraud_detection.data import foo` will make pytest pass but `python3 -m fraud_detection.app.py` fail

### Solution:
- Use `python3 -m fraud_detection.app` and have all imports as absolute import. Same to `python3 -m pytest tests/`

### Additional thoughts:
- Running `python3 -m pytest tests` is the same as running `pytest`, with the former adding current dir into PATH.
