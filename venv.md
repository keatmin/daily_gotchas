# How does virtualenv works?
It prepends the path of python executable of virtual environment to `$PATH`.

## Example
```
echo $PATH
```
Gives

```
/Users/jianshen/.pyenv/shims:/Users/jianshen/.pyenv/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/Visual Studio Code.app/Contents/Resources/app/bin:/usr/local/opt/fzf/bin
```

After activating virtualenv, your `$PATH` variable now is:
```
/Users/jianshen/Desktop/Projects/playground/venv/bin:/Users/jianshen/.pyenv/shims:/Users/jianshen/.pyenv/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/Visual Studio Code.app/Contents/Resources/app/bin:/usr/local/opt/fzf/bin
```

Note that `/Users/jianshen/Desktop/Projects/playground/venv/bin` as been prepended to the `$PATH` variable. When running `python`, system will
first search through this path to look for `python` executable.
