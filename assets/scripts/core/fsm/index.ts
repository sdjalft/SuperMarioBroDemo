import {observable, makeAutoObservable} from 'mobx/dist/mobx.cjs.production.min.js';

export abstract class FSMState {
  abstract id: string;

  constructor() {}

  abstract nextState(): FSMState;
};

class FSM {
  private _stateStack: Array<FSMState> = [];
  public currentState: FSMState;
  
  constructor() {
    console.log('123')
    const arr = observable([1, 2, 3]);
    console.log(arr);
  }

  public init(initState: FSMState) {
    console.log('in2!!!');
    this.currentState = initState;
    console.log('in3!!!');
  }

  public action() {
    console.log('in!!!')
    this.currentState = this.currentState.nextState();
  }
}


export default FSM;
