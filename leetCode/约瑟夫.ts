import { ArrayQueue } from "./常见数据结构/Queue";

/**
 * 1.获取最后剩下的人的名字
 *
 * 不符合 出队=>然后入队 ; 符合   直接出队
 */





function lastReminding(n: number, m: number) {
  const qu = new ArrayQueue<number>()

  // 从1 开始
  for (let i = 1; i <= n; i++) {
    qu.enqueue(i)
  }
  while (qu.size() > 1) {
    // 前面的入队和出队
    for (let i = 1; i < m; i++) {
      // 从第一个人开始
      // 小于num的  一个个入队  然后出队
      const name = qu.dequeue()
      if (name) qu.enqueue(name)
    }
    // 淘汰一个
    qu.dequeue()
  }


  return qu.dequeue()
}

console.log(lastReminding(5, 3)) //3
console.log(lastReminding(10, 17)) //2
// console.log(lastReminding(8, 4))


export { }