import { Stack } from "./栈/Stack"

const str1: string = "[](){}"
const str2: string = "[)"
const str3: string = "[](}"
const str4: string = "[]({})[{}()]"



function judge(str: string): boolean {
  const st = new Stack()

  for (let i = 0; i < str.length; i++) {
    const c = str[i]
    switch (c) {
      case "[":
        st.push("]")
        break;
      case "(":
        st.push(")")
        break;
      case "{":
        st.push("}")
        break;
      default:
        if (c !== st.peek()) {
          return false
        } else {
          st.pop()
        }
        break;
    }
  }


  return st.isEmpit()
}

console.log(judge(str1))
console.log(judge(str2))
console.log(judge(str3))
console.log(judge(str4))



