export default class Service {
  constructor() {
    this.token = this.getToken();
    this.days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'  ];
  }

  createTraining = () => {
    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так !'
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

  getCurrent = () =>{
    const date = new Date();
    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так!',
      data: {
        id: `id+ ${Date.now()}`,
        title: 'Грудь, бицепс',
        date: `${this.days[date.getDay()]} ${date.toLocaleDateString()}`,
        description: 'Тренировка с не большими весами',
        exerciseList: []
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

  addExercise = () => {
    const date = new Date();
    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так!',
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

  getExercise = () => {

    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так!',
      data: [
        {
          id: `id==${Date.now()}`,
          title: 'Жим на горизонтальной скамье',
          approachList: []
        }
      ]
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

  addApproach = (exerciseId) => {
    const date = new Date();
    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так!',
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

  getApproach = (exerciseId) => {
    const date = new Date();
    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так!',
      data: [
        {id:`test+1`, intensity: '',  unit: '', isEdited: true},
      ]
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

  updateApproach = (updateData) =>{

    updateData.token = this.token;

    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так!',
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

  save = (updateData) =>{

    updateData.token = this.token;

    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так!',
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

  end = () => {

    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так!',
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


  getWorkouts = (id) => {
    const data = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так!',
      data: [
        {
          id: `id+1${Date.now()}`,
          title: 'Грудь, бицепс',
          date: 'Пн 02.05.2024',
          description: 'Тренировка с не большими весами',
          isActive: false
        },
        {
          id: `id+2${Date.now()}`,
          title: 'Ноги, плечи',
          date: 'Ср 04.05.2024',
          description: 'Тренировка с не большими весами',
          isActive: false
        },
        {
          id: `id+3${Date.now()}`,
          title: 'Спина, трицепс',
          date: 'Пт 06.05.2024',
          description: 'Тренировка с не большими весами',
          isActive: false
        },
      ]
    };

    const workout = {
      success: Math.random() < 0.85,
      message: 'Упс, что то пошло не так!',
      data: {
          id: `id+1${Date.now()}`,
          title: 'Грудь, бицепс',
          date: 'Пн 02.05.2024',
          description: 'Тренировка с не большими весами',
          isActive: false,
          exerciseList: [
            {
              id: `id==${Date.now()}`,
              title: 'Жим на горизонтальной скамье',
              approachList: [{id:`id+=${Date.now()}`, intensity: '',  unit: '', isEdited: true}]
            },
            {
              id: `id==33`,
              title: 'Присяд',
              approachList: [{id:`id+=11`, intensity: '',  unit: '', isEdited: true}]
            }
          ],
        }
      };

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.85) {
          reject(new Error('Что то пошло не так!'))
        } else {
          if(id){
            resolve(workout);
          } else {
            resolve(data);
          }
        }
      }, 1000);
    })
  }

  getToken() {
   return document.querySelector('[name="token"]').content;
  }

}