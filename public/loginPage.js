// // Класс для работы с формой авторизации и регистрации
"use strict"

"use strict"

const userFormObject = new UserForm(); // создает объект класса UserForm
// эмуляция ... Тут же уже не эмуляция, а реальная отправка данных. Эмуляция в гифке и в консоле с 
//передачей самостоятельно указанного объекта, а не переменной data
userFormObject.loginFormCallback = (data) => { // чтобы не потерять контекс (this) лучше (проще)
  // использовать стрелочную ф-ию
  ApiConnector.login(data, response => {
    // console.log(response); // проверяет какой объект возвращает сервер. Это, перед сдачей на 
    //проверку, нужно удалить, т.к. пользователь в консоль не лазит, а если и полезет, то на работающем 
    //сайте это точно не нужно, используется только разработчиком во время отладки

    if(response.success === true) {// проверяет успешность запроса. Само значение свойства success 
      //является логическим (тип boolean), поэтому можно сократить данное условие до простого 
      //response.success (удалить === true)
      location.reload(); // перезагрузка страницы (с переходом в личный кабинет),
      // потому что логин/пароль были верные
    } else {
      setLoginErrorMessage(message); // нет такой ф-ии в текущем файле. Есть такой метод у 
      //объекта/экземпляра класса userForm, поэтому правильно использовать так -
      // userFormObject.setLoginErrorMessage(response.error);. Переменной message тоже нигде не объявлено,
      // да и не нужно, т.к. мы получаем это сообщение с сервера, в свойстве error, поэтому так и 
      //пишем/используем.
    };
  });
};















// создает объект класса UserForm
const userFormObject = new UserForm();

/** 
 * Вход 
 */
userFormObject.loginFormCallback = function(data) {
  ApiConnector.login(data, response => {
    console.log(response); // проверяет какой объект возвращает сервер
    // проверяет успешность запроса
    if(response.success === true) {
      location.reload();
      
    } else {
      setLoginErrorMessage(message);

    };

  });

};




// const userForm = new UserForm();
// UserForm.loginFormCallback = data =>console.log(data)
// if (          ?       ){         //запрос успешный 
//     location.reload();    //- вызываем 
//     } else {                        // запрос неуспешный
//     this.setLoginErrorMessage('Ошибка!')
    
    
//     ApiConnector ({login: oleg@demo.ru,  password: demo}, response =>console.log(response));  
//     //эмуляция отправки правильных данных (якобы полученных из формы) и в консоль вывoдим ответ 
//     //сервера












