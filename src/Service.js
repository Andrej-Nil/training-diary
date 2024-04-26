export default class Service {
  constructor() {
    this.token = this.getToken();
    this.days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'  ];
  }

    getUser = () => {
      const data = {
          success: Math.random() < 0.85,
          message: 'Упс, что то пошло не так !',
          user: {
            name: 'AndreyNill',
            isWorkout: false
          }
        };

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.85) {
            reject(new Error('Что то пошло не так!'))
          } else {
            resolve(data);
          }
        }, 1000);
      })
  }

  login = (formData) => {
    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так !',
      user: {
        name: 'AndreyNill',
      }
    };
    // fetch('test', {
    //   method: 'POST',
    //   body: formData
    // }).then((res) => console.log(res))
    //   .catch((error) => console.log(error))

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.85) {
          reject(new Error('Что то пошло не так!'))
        } else {
          resolve(data);
        }
      }, 1000);
    })
  }

  create = (formData) => {
    const date = new Date();
    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так !',
      workout: {
        title: 'Фулбоди',
        description: 'Тренировка со средними весами',
        date: `${this.days[date.getDay()]} ${date.toLocaleDateString()}`
      }
    };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.85) {
          reject(new Error('Что то пошло не так!'))
        } else {
          resolve(data);
        }
      }, 1000);
    })
  }

  getToken() {
   return document.querySelector('[name="token"]').content;
  }
}