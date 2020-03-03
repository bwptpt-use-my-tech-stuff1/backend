# backend


*** AUTHORIZATION ROUTE ***
POST /api/auth/register
{
    username: 'test',
    password: 'test',
    firstName: 'Test',
    lastName: 'Test'
}

POST /api/auth/login
{
    username: 'test',
    password: 'test'
}

Return is a token that should be stored to storage

*** PROTECTED ROUTE ***
GET /api/protected/users
Requires a json web token header in Authorization
{
    Authorization: 'ejaiovneaoinfaef.aeoinaeoiawlfa.aweovanweiovna
}

Returns a list of all users


GET /api/protected/users/{id of user}
Returns the user with the associated ID


GET /api/protected/rentals
Requires a json web token header in Authorization
{
    Authorization: 'ejaiovneaoinfaef.aeoinaeoiawlfa.aweovanweiovna
}

Returns a list of all rentals available