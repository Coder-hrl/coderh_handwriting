class Node {
  // 用来初始化每一个节点
  constructor(value) {
    this.val = value
    this.next = null
  }
}

class ListNode {
  constructor() {
    // 设置头部节点
    this.head = null
    this.length = 0
  }

  // 添加方法
  append(val) {
    // 初始化每一个node
    let node = new Node(val)
    let p = this.head
    if (this.head) {
      // 遍历到最后一个节点,用来添加next属性
      while (p.next) {
        p = p.next
      }
      p.next = node
    } else {
      this.head = node
    }
    this.length++
  }

  print() {
    let p = this.head
    let str = ''
    if (this.head) {
      // 因为p.next为null时,是最后一个节点
      while (p.next) {
        str += p.val + '=>'
        p = p.next
      }
      // 还需要添加最后一个节点
      str += p.val

      return str
    } else {
      return '字符串为空'
    }
  }
}

const listNode = new ListNode()

listNode.append('1')
listNode.append('2')
listNode.append('3')
listNode.append('4')
listNode.append('5')
listNode.append('6')

console.log(listNode.length)
console.log(listNode.print())
