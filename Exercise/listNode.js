class Node {
  constructor(value) {
    this.val = value
    this.next = null
  }
}

class ListNode {
  constructor() {
    this.head = null
    this.length = 0
  }

  append(val) {
    let node = new Node(val)
    let p = this.head
    if (this.head) {
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
      while (p.next) {
        str += p.val + '=>'
        p = p.next
      }
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
