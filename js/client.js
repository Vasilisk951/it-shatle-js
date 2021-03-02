const tBody = document.querySelector('.t-body');

fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for (let i = 0; i < data.length; i++) {

            let tr = document.createElement('tr');
            let tdName = document.createElement('td');
            let tdCompany = document.createElement('td');
            let tdEmail = document.createElement('td');
            let tdPhone = document.createElement('td');
            let tdBalance = document.createElement('td');
            let tdDate = document.createElement('td');
            let tdRemove = document.createElement('td');

            tBody.appendChild(tr);

            tr.append(tdName);
            tr.append(tdCompany);
            tr.append(tdEmail);
            tr.append(tdPhone);
            tr.append(tdBalance);
            tr.append(tdDate);
            tr.append(tdRemove);

            tdName.append(data[i].name);
            tdCompany.append(data[i].company);
            tdEmail.append(data[i].email);
            tdPhone.append(data[i].phone);
            tdBalance.append(data[i].balance);
            tdDate.append(data[i].registered);
            tdRemove.append('❌');
        }


        //работа с модальным окном
        let users = document.querySelectorAll('tbody tr');
        let user = document.querySelectorAll('tbody tr td:last-child');
        const modalText = document.querySelector('.modal-text');
        const btnRemove = document.querySelector('.remove');
        const btnCancel = document.querySelector('.cancel');
        const modal = document.querySelector('.modal');
        const infoRemove = document.querySelector('.info');
        const infoClose = document.querySelector('.info-hide');
        const infoDo = document.querySelector('.info-remove');
 

        for (let i = 0; i < user.length; i++) {
            let b = user[i];
            b.addEventListener('click', function () {
                scroll(top);
                document.body.style.overflow = 'hidden';
                modal.classList.add('active');
                modalText.innerHTML = `Вы точно хотите удалить пользователя ${data[i].name}`;
                btnCancel.addEventListener('click', function () {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'visible';
                })
                btnRemove.addEventListener('click', function () {
                    users[i].remove();
                    modal.classList.remove('active');
                    document.body.style.overflow = 'visible';
                    infoRemove.classList.add('active');
                })
            })
        }

        //закрытие сообщения об удалении пользователя 
        infoClose.addEventListener('click', function () {
            infoRemove.classList.toggle('active');
        })

    }
    )

