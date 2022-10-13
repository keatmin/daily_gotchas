---
slug: python-memory-management
title: Managing Python Memory
authors: keatmin
tags: [python, memory]
---

Memory management in Python is interesting as compared to low-level languages since it is being managed automatically. This gotchas will explain how to use less memory when managing data that is relatively big in a function.

The way Python knows when to release the memory of an object depends on the counter. In short, it tracks objects and frees it when they're no longer used. Take this example:

```python

def foo():
    data: dict = {"john": "wick"}
    bar(data)
    return

def bar(d):
    print(d)
    return
```

When `foo()` is called the counter looks like this:
```python
foo():
    data = {"john": "wick"} # Data object counter increased to 1
    bar(d=data) # d reference counter increased to 2
    print(d)
    return # d goes away and released, counter back to 1
return # data goes away and it goes back to 0
# Dictionary released and freed
```

:::note

The `print()` function prints the data, it does nothing to change the counter
The `bar()` returns decreased the counter

:::

The issue with this is once the data is passed to `bar()` the dictionary was not used by `foo()` and yet the memory persists in `foo()` until `foo()` exits even though it is not being used by `foo()`. In practice it is not that bad to do that, however, if the object is a big numpy array that takes up 1GB of memory, this will create redundancy of an extra 1GB in memory

## Data Scientist example

It is very common for data scientist to do something like this:

```python
import pandas as pd

def load_data(data_path: str):
    return pd.read_csv(data_path) # Huge data

def process_data(data_path: str):
    data = load_data(data_path)
    return transform_1(transform_2(data))

def transform_1(data):
    return data * 2

def transform_2(data):
    return data + 10

process_data()
```

Looks benign, but if we were take a close look into it. `data` in `process_data()` persists while `transform_1` and `transform_2` is running. The peak usage of data will be 3x of the data size from `load_data` because a brief moment of original data is present when transformation is happening.

At peak:
- 1x from data persisting
- 2x from transform1 and transform2

The maximum for peak memory from these should be 2x rather than 3x, the extra 1x came from the `data` in process_data() persisted until the end of the function!

### Solutions
#### Solution #1
Don't define a short lived variable
```python
def process_data(data_path):
    return transform2(transform1(load_data(data_path)))
```

#### Solution #2
Mutate locally or replace data
```python
def process_data(data_path):
    data = load_data(data_path)
    data = transform1(data)
    data = transform2(data)
    return data
```

## Conclusion
It is fine to let an object live a little longer as most of the time it's quite negligible, however when dealing with larger data, living longer can cause OOM or require a higher memory to run a function like such.

Get into habit of tracking your objects' references


Link: [Pythonspeed](https://pythonspeed.com/articles/function-calls-prevent-garbage-collection/)
