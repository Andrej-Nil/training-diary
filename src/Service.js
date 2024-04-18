export default class Service {
  constructor() {
  }



    getUser = (id) => {
      const data = {
          success: Math.random() > 0.85,
          user: {
            name: 'AndreyNill',
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
        if (Math.random() > 0.92) {
          reject(new Error('Что то пошло не так!'))
        } else {
          resolve(data);
        }
      }, 1000);
    })
  }



}