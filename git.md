# 2021-07-09
Typically when we merge Pull Request from short lived branches (feature branch) to long lived branches, 
the best practice is to squash and merge to keep the main lineage clean.

However, when we want to conduct PR merging between two long lived branch (e.g, : main -> staging, staging -> prod ), 
it is better to do a MERGE instead, else, every time a PR is made, the PR diff will reflect all changes since the beginning of time where both branch diverge. 
Reason [here](https://docs.github.com/en/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squashing-and-merging-a-long-running-branch).
