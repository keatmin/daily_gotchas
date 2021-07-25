## 2021-07-24
1. `Run apt-get update && apt-get -y upgrade` ensure security in docker image is up to date. Ensure that CI/CD rebuilds the image regularly to ensure that the latest security patch is updated in docker image
```bash
docker build --pull --no-cache
```
2. `apt-get install` commands should be paired with a `rm -rf /var/lib/apt/lists/*` in the same layer and also used with `-y --no-install-recommends`

Source:
- [blog](https://pythonspeed.com/articles/docker-cache-insecure-images/)
- [podcast with author](https://talkpython.fm/episodes/show/323/best-practices-for-docker-in-production)
