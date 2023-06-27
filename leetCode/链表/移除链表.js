var removeListNode = (head, val) => {
  if (head == null) return head
  head.next = removeListNode(head.next, val)
  return head.val === val ? head.next : head
}

// 给好指定的点,使得新生成的列表是移除这个点
var removeListNode = (head, val) => {
  let el = {
    next: head,
  }
  let p = el
  while (p.next) {
    if (p.next === val) {
      p.next = p.next.next
    } else {
      p.next = p.next
    }
  }
  return el.next
}
