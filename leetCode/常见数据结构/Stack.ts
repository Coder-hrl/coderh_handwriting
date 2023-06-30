// 使用一种泛型类的形式来存在
// 可以用于严格限制类型
class IStack<T>{
  push(element: T) { }
  pop() { }
  print(): void { }
  isEmpit() { }
}

// 继承和接口的实现是多态的前提
class Stack<T> implements IStack<T> {
  private _stack: T[] = []

  push(val: T): void {
    this._stack.push(val)
  }
  // 不能修改为T 是因为一旦Stack 为空 它可能返回null 或者 undefined
  pop(): T | undefined {
    return this._stack.pop()
  }

  print(): string {
    let str = ""
    this._stack.map(item => str += item)
    return str
  }
  isEmpit(): boolean {
    return this._stack.length === 0
  }
  peek(): T | undefined {
    return this._stack[this._stack.length - 1]
  }
}

const s1 = new Stack<number>()


export { Stack }