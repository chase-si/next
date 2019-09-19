import mobx, { observable, action } from 'mobx'
import { RequestMock } from '../api'

// mobx.configure({ enforceActions: true })

export default class AuthenticationStore {
    @observable testData = []
    @observable state = 'pending' // 'pending' / 'done' / 'error'

    @action
    async fetchProjects() {
      this.testData = []
      this.state = 'pending'
      // try {
      //   const projects = await RequestMock()
      //   console.log(projects)
      //   // await 之后，再次修改状态需要动作:
      //   runInAction(() => {
      //       this.state = 'done'
      //       this.githubProjects = filteredProjects
      //   })
      // } catch (error) {
      //     runInAction(() => {
      //         this.state = 'error'
      //     })
      // }
    }
}
