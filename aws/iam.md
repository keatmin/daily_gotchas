## 2021-08-10

Not a new gotcha, but a reminder on how to assume role:

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "sts:AssumeRole",
            "Resource": [
                "arn:aws:iam::<account_no>:role/Role",
                "arn:aws:iam::<account_no>:role/Role2"
            ]
        }
    ]
}
```

With above inline policy for a user, the user can:
assume `Role` or `Role2` on their local with aws cli using

```bash
aws sts assume-role --role-arn "arn:of:role" --role-session-name "name" --profile "profile_name_of_user"
```
*Never use default profile for your aws* use `aws configure` to configure a profile that's not default

To only allow conditions on who and how to assume role, add
```json
"Condition": {
    "ForAllValues:StringEquals": {
                    "aws:username": "keat"
    }
}
```

To allow tag-based policy:
```json

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": "sts:AssumeRole",
            "Resource": "arn:aws:iam::<account_no>:role/Role-*",
            "Condition": {
                "StringEquals": {
                    "aws:ResourceTag/Team": "${aws:PrincipalTag/Team}"
                }
            }
        }
    ]
}
```
Assuming there are multiple roles, with `Role-` prefix, each with its respective resource tag `Team` that is referring to a specific team.

The above condition ensure that the resource tag `Team` for `Role-*` matches the resource tag `Team` for `Principal` before allowing the access to it.

The above example is not only limited to assume role, allowing `Action`s to tagged resources can be done similarly based on the principal tag of the user.


For reference on what conditions are available, refer to [docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_variables.html#policy-vars-wheretouse)
