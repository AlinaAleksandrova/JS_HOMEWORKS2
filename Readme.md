### Homework #86

Реализуйте компонент <MyForm>, отображающий форму из шести элементов:

email – инпут типа email
password – инпут типа password
address – textarea
city – текстовый инпут
country – select со следующими значениями: argentina, russia, china.
Accept Rules – checkbox булево значение должно быть приведено к строке
После сабмита формы появляется таблица, в которой показываются значения всех полей. Из этой формы можно вернуться в редактирование по кнопке Back.
При этом все данные должны оказаться на своих местах.


Форма:

    <form name="myForm">
      <div class="col-md-6 mb-3">
        <label for="email" class="col-form-label">Email</label>
        <input type="email" name="email" class="form-control" id="email" placeholder="Email">
      </div>
      <div class="form-group col-md-6">
        <label for="password" class="col-form-label">Password</label>
        <input type="password" name="password" class="form-control" id="password" placeholder="Password">
      </div>
      <div class="col-md-6 mb-3">
        <label for="address" class="col-form-label">Address</label>
        <textarea type="text" class="form-control" name="address" id="address" placeholder="1234 Main St"></textarea>
      </div>
      <div class="col-md-6 mb-3">
        <label for="city" class="col-form-label">City</label>
        <input type="text" class="form-control" name="city" id="city">
      </div>
      <div class="col-md-6 mb-3">
        <label for="country" class="col-form-label">Country</label>
        <select id="country" name="country" class="form-control">
          <option>Choose</option>
          <option value="argentina">Argentina</option>
          <option value="Ukraine">Ukraine</option>
          <option value="china">China</option>
        </select>
      </div>
      <div class="col-md-6 mb-3">
        <div class="form-check">
          <label class="form-check-label" for="rules">
            <input id="rules" type="checkbox" name="acceptRules" class="form-check-input">
            Accept Rules
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>



После отправки формы

    <div>
      <button type="button" class="btn btn-primary">Back</button>
      <table class="table">
        <tbody>
        <tr>
          <td>acceptRules</td>
          <td>true</td>
        </tr>
        <tr>
          <td>address</td>
          <td>Independence Avenue</td>
        </tr>
        <tr>
          <td>city</td>
          <td>kyiv</td>
        </tr>
        <tr>
          <td>country</td>
          <td>ukraine</td>
        </tr>
        <tr>
          <td>email</td>
          <td>my@email.com</td>
        </tr>
        <tr>
          <td>password</td>
          <td>qwerty</td>
        </tr>
        </tbody>
      </table>
    </div>

Або можете використати - https://react-bootstrap.netlify.app/docs/

Строки сортируются в алфавитном порядке по именам в первом столбце. В вашем случае результирующая таблица может отличаться, все зависит от того, какие данные выбраны.