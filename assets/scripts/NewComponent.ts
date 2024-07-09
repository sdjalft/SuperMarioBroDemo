import { _decorator, Component, Node } from 'cc';
import FSM, {FSMState} from "./core/fsm/index";
import { autorun } from 'mobx/dist/mobx.cjs.production.min.js';

const { ccclass, property } = _decorator;

class TestState1 extends FSMState {
  id = 'testState1';
  constructor() {
    super();
  }

  nextState(): FSMState {
    return new TestState2();
  }
}

class TestState2 extends FSMState {
  id = 'testState2';
  constructor() {
    super();
  }

  nextState(): FSMState {
    return new TestState3();
  }
}

class TestState3 extends FSMState {
  id = 'testState3';
  constructor() {
    super();
  }

  nextState(): FSMState {
    return new TestState1();
  }
}

@ccclass('NewComponent')
export class NewComponent extends Component {
    start() {
        const fsm = new FSM();
        console.log('in!!!')

        fsm.init(new TestState1());

        setInterval(() => {
            fsm.action();
            console.log(fsm.currentState.id)
        }, 1000);

        // autorun(() => {
        //     console.log(fsm.currentState.id);
        // });
        console.log('in4!!!');
    }

    update(deltaTime: number) {
        
    }
}

