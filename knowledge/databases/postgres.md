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
