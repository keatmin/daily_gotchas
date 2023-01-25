---
title: postgres
---
## Create User and Grant
Create user in psql and add user privileges to use database
```sql
CREATE DATABASE foo;
REVOKE ALL ON DATABASE foo FROM public;
CREATE USER bar WITH password '';
GRANT CONNECT ON DATABASE foo TO bar;
GRANT USAGE ON SCHEMA <schema> to bar;
GRANT ALL ON ALL TABLES IN SCHEMA public to bar;
```


## See who is logged in
```sql
SELECT distinct usename from pg_stat_activity;
```

## Reassigning privileges because user cannot be dropped
```sql
REASSIGN OWNED BY <username> TO <username2>;  -- or some other trusted role
DROP OWNED BY <username>;
```
