# 24-08-2021

Putting this here because I'm surprised even sometimes the experienced data scientist does not know about this.

### Q: Given table A and B that relates each other by user_id, find rows on A where user_id is not present on B.

Typically, people like to do
```sql
SELECT 
  * 
FROM A 
WHERE A.user_id NOT IN (SELECT DISTINCT user_id FROM B)
```

What I prefer,
```sql
SELECT 
  * 
FROM A  
  LEFT JOIN B 
ON 
  A.user_id = B.user_id
WHERE 
  B.user_id IS NULL
```

The initial expectation was, using `IN` where the Array object is huge can be much slower than `JOIN`. However, modern DW such as Redshift and BigQuery
seems to have smart query planner that are able to recognize this query pattern. Query cost for both method on these DW are the same.

However, can't say the same for row-based RDBMS.
