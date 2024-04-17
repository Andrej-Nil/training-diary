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



}