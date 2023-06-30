import { ArrayQueue } from "./常见数据结构/Queue";

/**
 * 1.获取最后剩下的人的名字
 *
 * 不符合 出队=>然后入队 ; 符合   直接出队
 */
const arr1 = ["1", "2", "3", "4", "5"]
const arr2 = ["a", "b", "c", "d", "e"]
const arr3 = ["A", "B", "C", "D", "E", "F"]





function hotPotato(names: string[], num: number) {
  const qu = new ArrayQueue<string>()

  // 全部入队
  names.forEach(item => {
    qu.enqueue(item)
  })
  while (qu.size() > 1) {
    // 前面的入队和出队
    for (let i = 0; i < num; i++) {
      // 小于num的  一个个入队  然后出队
      const name = qu.dequeue()
      if (name) qu.enqueue(name)
    }
    // 淘汰一个
    qu.dequeue()
  }
  return qu.front()
}

console.log(hotPotato(arr1, 2))
console.log(hotPotato(arr2, 3))
console.log(hotPotato(arr3, 4))
