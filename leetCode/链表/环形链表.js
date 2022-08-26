var hasCycle = (head) => {
  let cache = new Set()
  while (head) {
    if (cache.has(head.val)) {
      return true
    } else {
      cache.add(head.val)
    }
    head = head.next
  }
  return false
}

var hasCycle = (head) => {
  let fast = head
  let slow = head
  if (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      return true
    }
  }
  return false
}
