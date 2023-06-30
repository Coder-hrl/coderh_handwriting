class IArrayQueue<T>{
  enqueue(element: T) { }
  dequeue() { }
  front() { }
  ieEmpty() { }
  size() { }
}
interface IQueue<T> {
  enqueue(element: T): void
  dequeue(): T | undefined
  front(): T | undefined
  ieEmpty(): boolean
  size(): number
}

// class 可以继承接口来实现
// 实现这个数组
class ArrayQueue<T> implements IArrayQueue<T> {
  private _queue: T[] = [];

  enqueue(element: T) {
    this._queue.push(element);
  }
  dequeue() {
    return this._queue.shift()
  }
  front() {
    return this._queue[this._queue.length - 1]
  }
  ieEmpty() {
    return this._queue.length === 0
  }
  size() {
    return this._queue.length
  }
}

const que = new ArrayQueue<string>()

que.enqueue("1")
que.enqueue("2")
que.enqueue("3")
que.enqueue("4")

que.dequeue()
// console.log(que.size())

export {
  ArrayQueue
}