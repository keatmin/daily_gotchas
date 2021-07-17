# 2021-07-09
Not a gotcha for today, but something I realised I run often but have to look up often
- To create user in psql and add user privileges to use database
```sql

CREATE DATABASE foo;
REVOKE ALL ON DATABASE foo FROM public;
CREATE USER bar WITH password '';
GRANT CONNECT ON DATABASE foo TO bar;
GRANT USAGE ON SCHEMA <schema> to bar;
GRANT ALL ON ALL TABLES IN SCHEMA public to bar;
```
