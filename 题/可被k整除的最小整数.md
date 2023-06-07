## 题目描述
给定正整数 `k` ，你需要找出可以被 `k` 整除的、仅包含数字 `1` 的最 小 正整数 `n` 的长度。  

返回 `n` 的长度。如果不存在这样的 `n` ，就返回 `-1`  

- `1 <= k <= 105`

## 测试用例
> 输入：k = 1
输出：1
解释：最小的答案是 n = 1，其长度为 1。

> 输入：k = 2
输出：-1
解释：不存在可被 2 整除的正整数 n 。

> 输入：k = 3
输出：3
解释：最小的答案是 n = 111，其长度为 3。

## 思路
枚举，`n`从`1`开始，通过`11，111,1111...`这样遍历是否可以被k整除，同时记录n的长度 —— 即为`1`的个数  

枚举问题最大的问题就是要控制值越界 —— 怎么控制n的大小不溢出`Number` 
解决 ：利用余数循环，不直接用`11,111`来判断  —— ` (n * 10 + 1) % k`，而是记录每一次的余数，通过操作余数—— `（ramain * 10 + 1）% k`，这样可以保证值不会溢出  

如何跳出循环？ —— 通过`set`来记录余数，如果出现了相同的余数了，那就证明枚举存在循环了，则证明必不存在可以被`k`整除的结果，返回`-1`


## 代码实现  

```javascript
/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    // 偶数可以不可以？ 偶数直接返回-1
    if(k % 2 == 0){
        return -1;
    }
    // 奇数中哪些不可以
    if(k % 5 == 0){
        return -1
    }
    
	// 末位为1, 3, 7, 9
    // 找 remain % k == 0
    
    let remain = 1 % k;
    let length = 1;

    // set用来终止循环
    const hasSet = new Set();
    hasSet.add(remain);
    
    // 余数循环 可以避免值的溢出
    while(remain != 0){
        remain = (remain * 10 + 1) % k;
        // console.log(remain);
        // 判断余数是否已经存在，如果存在证明有循环，必不可能被整除
        if(hasSet.has(remain)){
            return -1;
        }
        hasSet.add(remain);
        length ++;
    }
    return length;
};
```