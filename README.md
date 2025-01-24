# routing
## ROUTING PARAMETERS
1. Users samayso lokal json server.
2. tabel ku soo xiro users bootstrap
3. 1d,name,username,email ka soo dooro
4. interbolation {{user.id}}qaabkaas isticmaal
5. routerLink ku xiro html users
6. <a>usame id users si click u shaqeeyo</a>
7. samamayso componint user si id ugu xirto
---------------

 ```s
8.<td><a [routerLink]="['/user', user.id]">{{user.id}}</a></td>`
  
  
<tbody>
      @for(user of users; track user){
      <tr>
        <td><a [routerLink]="['/user', user.id]">{{user.id}}</a></td>
        <td>{{user.name}}</td>
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
      </tr>
    }
    </tbody>
    ```

