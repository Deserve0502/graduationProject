import { observable, computed, action } from "mobx";


class AppStore {
    
    @observable scrollshow = 'false';
    
   
    @computed get desc() {
        return `${this.time}还有${this.todos.length}条任务待完成`
    }
    //意味着当time还有todos发生变化之后，就会重新自动执行，会返回一个新的结果
   
    @action changeScroll(boolean){
       this.scrollshow = boolean
    }
    
}

export default new AppStore();

