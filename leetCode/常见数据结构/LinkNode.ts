interface INode<T> {
  val: T
  next: INode<T> | null
}
class Node<T> implements INode<T> {
  val: T
  next: INode<T> | null = null
  constructor(val: T) { this.val = val }
}


interface IlinkList { }




class LinkList<T> implements IlinkList {
  head: Node<T> | null = null
  private size = 0


  get length(): number {
    return this.size
  }


  append(val: any): void {
    const newNode = new Node(val)


    if (this.head !== null) {
      let newNext = this.head
      // newNext下一个为空时
      while (newNext.next) {
        newNext = newNext.next
      }
      // 指向最后一个节点   应指向一个节点  而不是指向节点的值
      newNext.next = newNode
    } else {
      this.head = newNode
    }
    this.size++

  }
  traverse() {
    const values: T[] = []
    let newHead = this.head
    while (newHead) {
      values.push(newHead.val)
      newHead = newHead.next
    }
    console.log(values.join("->"))
  }

  insert(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) {
      // 越界判断
      return false
    } else {
      const newNode = new Node(value)
      if (position == 0) {
        newNode.next = this.head
        this.head = newNode
      } else {
        let i = 0
        let previous: Node<T> | null = null
        // 使用i来记录当前index值
        let nextHead = this.head
        // 来使用一个中间件来

        while (i < position && nextHead) {
          previous = nextHead
          nextHead = nextHead.next
          i++
        }
        newNode.next = nextHead
        // !.next 代表一定会有值
        previous!.next = newNode
      }
      return true

    }
  }

  removeAt(position: number): T | null {
    // 超出最大 返回null 没有可以删的
    if (position < 0 || position >= this.size) { return null }
    let newHead = this.head
    // 双指针  previous
    let previous: Node<T> | null = null

    if (position === 0) {
      // this.head 直接以下一个为起点  或者干脆为null
      this.head = newHead?.next ?? null
    } else {
      let index = 0
      while (index++ < position && newHead) {
        previous = newHead
        newHead = newHead.next
      }
      previous!.next = newHead?.next ?? null

    }

    this.size--

    return newHead!.val

  }

  get(position: number): T | null {
    if (position < 0 || position > this.size) { return null }
    let index = 0;
    let newHead = this.head
    while (index++ < position && newHead) {
      newHead = newHead?.next
    }

    // 使用断言 这个属性一定会有值
    return newHead!.val
  }
  getNode(position: number): Node<T> | null {
    if (position < 0 || position > this.size) { return null }
    let index = 0;
    let newHead = this.head
    while (index++ < position && newHead) {
      newHead = newHead?.next
    }

    // 使用断言 这个属性一定会有值
    return newHead
  }
  updated(val: T, position: number): boolean {
    if (position < 0 || position > this.size) { return false }

    const currentNode = this.getNode(position)
    currentNode!.val = val

    return true
  }
}


const l1 = new LinkList<string>()

l1.append("1")
l1.append("2")
l1.append("3")
l1.append("4")
l1.append("5")
l1.insert("A1", 0)
l1.insert("A2", 3)
l1.removeAt(0)
l1.removeAt(2)


l1.traverse()

export { }