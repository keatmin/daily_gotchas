---
slug: python-mypy-config
title: mypy Configurations
authors: keatmin
tags: [python, mypy]
---

mypy usually doesn't check types inside the function scope but generally in module scope, hence:
```python
# module scope that will make mypy scream
x = 5
print(x + "hello")

# Function scope that will pass mypy checks if there is no type hints
def foo():
    x = 5
    print(x + "hello")


def foo(x: int):
    x = 5
    print(x + "hello")
```

- To allow checking inside function, adding `check_untyped_defs` will make mypy check the function scope that doesn't have type hints.

- This is useful because if we are migrating a codebase to start using type hints, then this will start with checking all the types within a function and we can start solving from there.

- One other feature to add after `check_untyped_defs` is to add `disallow_untyped_defs` so that mypy will make sure that there's no functions with no type hints
```yaml title='pyproject.toml'
[tool.mypy]
check_untyped_defs = true
disallow_untyped_defs = true
```

Other notable config:
`disallow_incomplete_defs`

Source:
1. [Asottile's](https://www.youtube.com/watch?v=Rk-Y71P_9KE)
2. [mypy](https://mypy.readthedocs.io/en/stable/config_file.html)
